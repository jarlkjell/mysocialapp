ARG VERSION=lts-bullseye-slim
FROM node:$VERSION

#install bash
RUN sudo apt install bash -y

#use shell bash to start npm commands

SHELL ["/bin/bash", "-c"]
#install dependencies 
RUN apt update && apt upgrade 
RUN apt install -y curl 
RUN curl -fsSL https://deb.nodesource.com/setup_lts.x 
RUN apt-get install -y nodejs

#check version and then make build
#RUN node -v\
#&& npm -v\
#&& npm run build

#directory
WORKDIR socialapp


#expose runnning TCP ports (3000,3001)
EXPOSE 3000 3001

COPY . /socialapp

#ownership
COPY --chown=node:node . /socialapp

#set user to name
USER node

#cmd arg
#ENTRYPOINT ["npm", "start"]