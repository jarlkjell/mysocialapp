// .dockerignore
node_modules
build

#get node version 16 (alpine for resize)
From node:16-alpine

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