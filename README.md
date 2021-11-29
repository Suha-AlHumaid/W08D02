# W08D02

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
      contains: role and permessions
 * **User Schema**
     contains: email , password and role

 ## Routers:
 1- Role 
    * CreateRole
           To create new user role 
    * GetAllRoles
           List all roles in the DB
           
           
  
 2- User 
   * Register
           To create new user with particuler role (email , passsword , role) and hash the password by bcrypt
   * Login
           Login user by email and password (hashed by bcrypt) & set token (finsh in 60 minuts)
  
  

  
 
