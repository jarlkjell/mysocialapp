# NFT-Dealers
<hr><br>

## **Docker Usage Documentation for this project**
## 1. Setup:

* Follow the [Tutorial](https://learn.microsoft.com/en-us/windows/wsl/setup/environment) to set up **WSL2** on your local maschine
* After that follow the [Tutorial](https://learn.microsoft.com/en-us/windows/wsl/tutorials/wsl-containers) to get started with **Docker** on your local maschine 
* Make sure your local maschine matches all the requirements and necessary setups mentioned in the tutorials.
* Clone the repository in your preferred Distribution with *wsl*. Make sure that **git** is installed, for reference [view Tutorial](https://learn.microsoft.com/en-us/windows/wsl/tutorials/wsl-git)

## 2. How to Use:

### root user
* comment line 33/36 in Dockerfile to build and run container as root user
* `sudo docker build . -t socialapp` to build the image 
* `sudo docker images | grep socialapp` checks image
* `sudo docker run --entrypoint /bin/bash -it --rm -p 127.0.0.1:3000:3000/tcp -p 127.0.0.1:3001:3001/tcp -v ${PWD}:/socialapp --name socialapp socialapp` to mirror image (`-v ${PWD}:/<imageName>`) in path and to run as root the container with entry point as *$ -c* (`--entrypoint /bin/bash/`).
* Your are now in bash shell as root. *cd* to directorys where node modules need to be installed
* `npm i` for installing node modules by package.json


### node user
* uncomment line 33/36 for creating node user 
* `docker buid . -t socialapp` build image again with installed node modules now
* `docker run --entrypoint /bin/bash -d -it --rm -p 127.0.0.1:3000:3000/tcp -p 127.0.0.1:3001:3001/tcp -v ${PWD}:/socialapp --name socialapp socialapp` to mirror image in path and to run as node user the container with entry point *$ -C*
* `npm run dev` to run front and backend *concurrently* 

