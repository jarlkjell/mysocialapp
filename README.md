# mysocialapp
<br><hr>

## 1. Setup:

* Follow the [!Tutorial](https://learn.microsoft.com/en-us/windows/wsl/setup/environment) to set up **WSL2** on your local maschine
* After that follow the [Tutorial](https://learn.microsoft.com/en-us/windows/wsl/tutorials/wsl-containers) to get started with **Docker** on your local maschine 
* Make sure your local maschine matches all the requirements and necessary setups mentioned in the tutorials.
* Clone the repository in your preferred Distribution with *wsl*. Make sure that **git** is installed, for reference [view Tutorial](https://learn.microsoft.com/en-us/windows/wsl/tutorials/wsl-git)

## 2. How to Use:

### Non root user
* sudo docker build . -t socialapp
* sudo docker images | grep socialapp #checks image
* sudo docker run -d -it --rm -p 127.0.0.1:3000:3000/tcp -p 127.0.0.1:3001:3001/tcp  --name socialapp socialapp 

