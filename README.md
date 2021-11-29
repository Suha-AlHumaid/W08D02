# W08D02
# Baisc Authentication and Authorization API

index:

* [Packages](#Packages)
* [Technologies](#technologies)
* [Schemas](#Schemas)
* [Routers](#Routers)

## Packages:
```
npm i express
npm i nodemon
npm i bcrypt
npm i mongoose
npm i cose
npm i dotenv
npm i jsonwebtoken 
 ```


## Technologies:
* Mongoose
* Mongo DB
* express
* node js


## Schemas:
 * **Role Schema**
      contains this information: role and permessions
 * **User Schema**
     contains this information: email , password and role

 ## Routers:
 1- Role 

 * **Create Role Router**
      -To create new user role like: admin who can create , read, write and delete.
      
 * **Get All Roles Router**
      - List all roles in the DB like: Admin and user.

           
           
  
 2- User 
   * Register via username, password and role of account
                To create new user with particuler role (email , passsword , role). Password hashed by bcrypt.
   * Login via username and password
                Login user via compare email and password that enters by user with email and hashed password (by bcrypt). Also set access token validation which finsh in 60 minuts.
   
