# W08D02

index:

* [ Packages](# Packages)
* [Technologies](#technologies)
* [Schemas](#Schemas)
* [Routers](#Routers)

## Packages:
npm i express
npm i nodemon
npm i bcrypt
npm i mongoose
npm i cose
npm i dotenv
npm i jsonwebtoken

## Technologies:
* Mongoose
* Mongo DB
* express
* node js


## Schemas:
 1-Role
 contain: role and permessions
 2-User
 contain: email , password and role

 ## Routers:
 1- Role
a- CreateRole
  To create new user role 
 b- GetAllRoles
  List all roles in the DB
  
 ### 2- User
 a- Register
   To create new user with particuler role (email , passsword , role) and hash the password by bcrypt
b- Login
Login user by email and password (hashed by bcrypt) & set token (finsh in 60 minuts)
  
  

  
 
