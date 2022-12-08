ARG VERSION = lts-bullseye-slim
FROM node:$VERSION

#working directory
WORKDIR /mysocialapp

#install dependencies (clean install) 
RUN sudo apt install -y curl\
&& curl -fsSL https://deb.nodesource.com/setup_lts.x | bash - &&\
&& apt-get install -y nodejs

#check version and then make build
#RUN node -v\
#&& npm -v\
#&&npm run build

#directory
WORKDIR mysocialapp


#expose runnning TCP ports (3000,3001)
EXPOSE 3000 3001



