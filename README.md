# Black Innovation Alliance

Interactive map to showcae Black Innovation Alliance Partner Orginzations.

**Project Manager/Technical Lead:** Eric Chen, Matthew Dong, Mohamed Abaker.

**Team Members:**

- Ben Demmers
- Daniel Barra
- Janice Kim
- Ria Sharma

## Setting Up

#### Recommended Tools Checklist

- Git Clone this repository
- Create a [MongoDB Atlas Account](https://www.mongodb.com/cloud/atlas)
- Create a [Heroku account](https://www.heroku.com/)
- Install [Node.JS](https://nodejs.org/en/download/)
- Install [Yarn Package Manager](https://classic.yarnpkg.com/en/docs/install/#mac-stable)

##### Configuring Enviromental Variable

Create file called ".env.development" in root directory, it should look like the following:

```
ATLAS_URI=mongodb-connection-string-placeholder
JWT_SECRET=my-secret-jwt-key-placeholder
```

Then, create another file called ".env" in "src/client", it should look like the following:

```
REACT_APP_API_URL="http://localhost:5000"
```

#### Running Project

```bash
$ # run both server and client
$ yarn dev
$ # run server only
$ yarn server
$ # run client only
$ yarn client
```

Also, check tech guide: https://docs.google.com/document/d/1dZNvzUHPvmHiqaZH-xlCIaL21l8yvS9uMMplBd8stu4/edit#heading=h.h22nu89ch4po for more information
