#
# A. Doing everything manually in Docker
## 1. Create Dockerfile:

    FROM node:20-alpine

    WORKDIR /app

    COPY package*.json .

    RUN  npm install 

    COPY . ./

    EXPOSE 4000

    CMD ["node","./src/app.js"]


## 2. Build docker image from Dockerfile: 
> docker build -t abhinandanshrestha/nodeapp:1 .

## 3. List all the docker images 
> docker images

## 4. Run the Docker image (Makes brand new Docker Container):
> docker run --name basic -p 4000:4000 -d a4088c50fe72

> docker run --name basic -p 4000:4000 -d abhinandanshrestha/nodeapp:1

> docker run --name basic -p 4000:4000 --rm abhinandanshrestha/nodeapp

## 5. Volume mapping (changes in the local filesystem should be reflected in the Docker container)
> docker run --name <containername> -p 4000:4000 -v \<local path>:\<WORKDIR> \<imagename>

> docker run --name basic -p 4000:4000 -v D:\Docker:/app abhinandanshrestha/nodeapp 

> docker run --name basic -p 4000:4000 -v D:\Docker:/app abhinandanshrestha/ -v /app/node_modules nodeapp 

## 5. List all the running docker containers
> docker ps

## 6. List all the docker containers including the stopped docker container
> docker ps -a

## 7. Start and stop the docker container that has previously run (Already existing container). 
> docker start basic

> docker start -i basic

> docker stop 886ba9faa30c77a0bfd4914db82961f9c5db01a03ad6abadce76b1a9f2a5c23b
## 8. Remove all the containers and also the images
> docker system prune -a
>


# B. Doing all these things using docker-compose
## 1. Create docker-compose yaml file
```
version: "2.19.1"
services:
  api: 
    build: ./
    container_name: basic
    restart: always
    ports: 
      - '4000:4000'
    volumes:
      - ./:/app
      - D:/Docker/node_modules:/app/node_modules
  reactapp:
    build: ./blog
    container_name: reactapp
    restart: always
    ports: 
      - '3000:3000'
    stdin_open: true
    tty: true
```

## 2. Run:
> docker-compose up

> docker-compose down --rmi all -v

