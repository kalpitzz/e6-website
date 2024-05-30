# E6X DASHBOARD Server

### Requirements:
* Python 3.6 or higher
* MongoDB 3.4 or higher


### Config App
* Base setting app: config
* Environment file: config/env_variables.py


### Env Variables:

```
SERVER # DEV, PROD, STAGING, default to DEV
# DB
MONGO_DB_USER # DB username
MONGO_DB_PASSWORD  # DB Password
MONGO_DB_HOST  # DB Host
MONGO_DB_PORT  # DB Port

#rabbitmq
### rabbitmq- follow the link to install
https://www.rabbitmq.com/#getstarted
RABBIT_HOST
RABBIT_USER_NAME
RABBIT_PASS
RABBIT_PORT #5672

# Logging
# Not using as of now.
LOKI_HOST_IP_ADDRESS  # Loki host IP Address. Ex: 192.168.0.14
LOKI_SOURCE_HOST  # Loki source host. Ex: localhost
LOKI_PORT  # Loki port. Ex: 3100
```

## API Docs using swagger
URL: /swagger/

## API Docs using openapi
URL: /docs/

## Admin

URL: /admin/

### To migrate all the DBs
```python
 python manage.py migrate_db
```

### Gunicorn
gunicorn config.wsgi:application --workers=1 --bind=0.0.0.0:8000


# Docker

## Build the docker image.
```
docker build -t app_server:v1 .
```

## Push the docker image. (Replace IMAGE_NAME with the docker image name):
```
docker push IMAGE_NAME
```

## To run in production server (Replace IMAGE_NAME with the docker image name):
```
 docker run --env-file docker.env -it -p 8000:8000 -p 5672:5672 -p 27017:27017 app_server:v1
```

## To remove te container:

```
docker rm -f IMAGE_NAME
```

## Purging All Unused or Dangling Images, Containers, Volumes, and Networks

```
docker system prune
```

## Remove all the images

```
docker rmi $(docker images -a -q)
```

```
docker ps -a
```

## For more info
https://www.digitalocean.com/community/tutorials/how-to-remove-docker-images-containers-and-volumes