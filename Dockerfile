# escape=`
ARG VERSION = lts-bullseye-slim
FROM node:$VERSION

#working directory
WORKDIR /mysocialapp

#install dependencies (clean install) 
RUN npm ci

#make build
RUN npm run build

#expose runnning ports (3000,3001)
EXPOSE 3000 3001

#Commands for start
CMD ["npx","build"]
