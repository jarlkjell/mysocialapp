ARG VERSION=lts-bullseye-slim
FROM node:$VERSION

#install bash
RUN apt install bash -y



#install dependencies 
RUN apt update && apt upgrade 
RUN apt install -y curl 
RUN curl -fsSL https://deb.nodesource.com/setup_lts.x 
RUN apt-get install -y nodejs

#use bash shell to start npm commands
SHELL ["/bin/bash", "-c"]

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
#COPY --chown=node:node . /socialapp

#set user to name
#USER node

#set --entrypoint in docker run to npm start
#ENTRYPOINT ["npm", "start"]