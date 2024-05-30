#Stage 1
# pull official base image
#FROM public.ecr.aws/o9g0a2g8/node:16-alpine3.18 AS builder
FROM node:20.13.1-alpine3.20
# set working directory
WORKDIR /app
# ENV GENERATE_SOURCEMAP=false
# install app dependencies
#copies package.json and package-lock.json to Docker environment
COPY package.json ./
COPY package-lock.json ./

# RUN npm version
# # install app dependencies
# #copies package.json and package-lock.json to Docker environment
RUN npm i
# RUN npm install react-vtree@2.0.4 --force

# Copies everything over to Docker environment
COPY . .
RUN npm run build
CMD ["npm", "run", "start"]
