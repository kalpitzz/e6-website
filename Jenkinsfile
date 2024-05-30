pipeline {
    environment {
        IMAGE_TAG_PREFIX = "2.0.${BUILD_NUMBER}-"
        RELEASE_NAME = "e6data-website"
        SCANNER_HOME = tool 'sonarqube'
        CONTAINER_IMAGE = "${AWS_ACCOUNT_ID}.dkr.ecr.${AWS_REGION}.amazonaws.com/${RELEASE_NAME}"
        AWS_ACCOUNT_ID = credentials('DEV_AWS_ACCOUNT_ID')
        AWS_REGION = credentials('DEV_AWS_REGION')
    }

    options {
        disableConcurrentBuilds()
        skipDefaultCheckout()
    }

    agent {
        kubernetes {
            defaultContainer 'jnlp'
        }
    }

    stages{
        stage('Initial setup') {
            parallel {
                stage('SonarQube Analysis') {
                    steps {
                        checkout scm
                        withSonarQubeEnv('sonarqube-jenkins') {
                            sh 'export SONAR_SCANNER_OPTS=-Xmx2048m'
                            sh '${SCANNER_HOME}/bin/sonar-scanner'
                        }
                    }
                }

                stage('aws auth') {
                    agent {
                        kubernetes {
                            inheritFrom 'helmdeploy'
                            defaultContainer 'helm'
                        }
                    }

                    steps {
                        script {
                            env.ECR_TOKEN=sh(returnStdout: true, script: "aws ecr get-login-password --region ${AWS_REGION} --output text").trim()
                        }
                    }
                }
            }
        }

        stage('Docker build') {
            agent {
                kubernetes {
                    inheritFrom 'dockerarchbuild'
                    defaultContainer 'docker'
                }
            }

            when {
                branch 'main'
            }

            steps {
                checkout scm
                sh 'apk add git curl'
                sh 'git config --global --add safe.directory "*"'
                script {
                    env.GIT_COMMIT_HASH = sh (script: 'git rev-parse --short HEAD', returnStdout: true)
                    env.TAG_VALUE = "${IMAGE_TAG_PREFIX}${GIT_COMMIT_HASH}"
                }
                sh 'docker login -u AWS -p ${ECR_TOKEN} ${AWS_ACCOUNT_ID}.dkr.ecr.${AWS_REGION}.amazonaws.com'
                sh "docker buildx create --name mybuilder --driver docker-container --use --platform linux/arm64,linux/amd64 --driver-opt network=host --buildkitd-flags '--allow-insecure-entitlement network.host' --bootstrap"
                sh 'docker buildx build --no-cache --platform linux/amd64 -t ${RELEASE_NAME} -t ${CONTAINER_IMAGE}:${TAG_VALUE} --network host --load .' 
                sh 'curl -sfL https://raw.githubusercontent.com/aquasecurity/trivy/main/contrib/install.sh | sh -s -- -b /usr/local/bin v0.45.1'
                script {
                    def trivyResult = sh(
                        script: "trivy image --exit-code 1 --severity HIGH,CRITICAL --no-progress --scanners vuln ${RELEASE_NAME}",
                        returnStatus: true
                    )
                    if (trivyResult == 0) {
                    // Trivy scan passed, push the image
                    sh 'docker buildx build --platform linux/amd64 -t ${CONTAINER_IMAGE}:${TAG_VALUE} --network host -m 4g --push .'
                    }
                    else {
                    error('Trivy scan failed for Docker image. Image will not be pushed.')
                    }
                }
                sh 'echo ${TAG_VALUE}'
            }
        }
    }
}
