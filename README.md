# sharetech-phase2
## How to Start develop
Below is the example on bash.
1. You can clone this repository.
``` Shell
$ git clone {This Repository URI}
```
2. Next, change directory and create .env file.
```Shell
# You should add environment arg "USER_NAME".
# Below is frontend example, and also you should create .env file in backend directory.
$ cd ./sharetech_v2/frontend/
$ vi .env
$ echo "USER_NAME: app" > .env
```
3. Finaly, execute build script.
```Shell
$ cd ./sharetech_v2
$ souce build.sh
```

## Frontend develop guide
The npm dev server automaticaly start when container build or start. 
1. You should install npm packages written in  package.json file.
   Attach to frontend container and execute below command in target directory.
```Shell
# Execute on frontend container.
$ cd /usr/src/app/
$ npm install
```
