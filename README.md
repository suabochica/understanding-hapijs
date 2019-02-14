# Hapi
Repository to explore the purpose of Hapi.js

> Bear in mind the Hapi's version. Some interesting features were added after v17 and also other things were deprecated.

## Hapi Features
**Hapi** is a simple to use configuration-centric framework that provides a set og built-in functionality to build web applications and services quickly an effectively with JavaScript. Below the features:

+ **Authentication and Authorization:** Hapi ships with built-in authentication and authorization schemes and strategies. Anonymous, basic-auth, cookie-based and token-based authentication schemes are provided by Node.js.
+ **Caching:** Hapi provides powerful client and server side caching via [catbox]() and makes using cache very convenient.
+ **Routing:** Hapi provides a router that allow you to express how your web application or API routes should look.
+ **Validation:** With `Joi`, object schema validation is a breeze in Hapi.
+ **Cookies:** Hapi provides several configuration options for making dealing with cookies flexible, safe and simple.
+ **Logging:** Hapi ships with a built-in login methods.
+ **Simplified Error Handling:** [Boom](https://github.com/hapijs/boom) provides a set of utilities for returning HTTP-friendly error objects.
+ **Process Monitoring:** [Good](https://github.com/hapijs/good) is a Hapi plugin to monitor and report on a variety of hapi server events as well as ops information from the host machine. It listens for events emitted by hapi server instances and pushes standardized event to a collection of streams.

## Hapi vs Express
Basically, the difference between Hapi and Express is that Express is very minimal. You need to add more package for several functionalities white Hapi, on the other hand, provides a robust API for several functionalities out-of-the-box.

## Building a Dog API With Hapi
This is an API to manage a collection of dogs. The core API principles you should be aware of:

+ REST describes how to make resources available in a client-server relationship.
+ Data should be organized around resources.
+ API should respond to common HTTP verbs, `GET`, `POST`,`PUT`, `PATCH` and `DELETE`.
+ Server should be stateless

Also, we want different API endpoints for CRUD operations.

+ Get all dogs - `GET /dogs`
+ Get one dogs - `GET /dog/11`
+ Create a dogs - `POST /dogs`
+ Edit a dog - `PUT /dogs/11`
+ Delete a dog `PUT /dogs/11`

And finally, a dog have the following attributes:

+ name
+ breed
+ age
+ image

The project structure have to folders: `controllers` and `models`

+ The `controllers` folder will house all the logic of saving and retrieving data from the database
+ The `models` folder will house the schema for the dog API

## Database
To create the `dbdogs` database you have to install [MongoDB Server](https://www.mongodb.com/download-center/community) and for an intuitive navigation in the database please install GUI(Graphic User Interface) [MongoDB Compass Community](https://www.mongodb.com/products/compass).

+ Database: MongoDB

### Database Information
+ Database name: `dbdogs`
+ Database user: n/a
+ Database password: n/a

### Mongo Shell useful queries

> **Note:** to enable the `mongo` command you have to add  your `{mongodb/installation/dir}/bin` to the `PATH` environment variable.

Query to show users

```
show users
```

Query to show databases

```
show databases
```

Query to use a database

```
show use {database_name}
```

Query to show the database collections

```
show collections
```

Query to create a database collection

```
db.createCollection(dogs, {
    autoIndexId: true
})
```

Query to create a database collection

```
db.insert(dogs, {
    autoIndexId: true
})
```
Query to insert an object in a database collection

```
db.dogs.insert({
   name: 'Tororo',
   breed: 'Bernese Mountain',
   age: 12,
   image: 'https://images.dog.ceo/breeds/mountain-bernese/n02107683_4194.jpg'
})
```

## Refs
+ ~[Hapi.js Framework Crash Course _version outdated_](https://www.youtube.com/watch?v=2lprC0yYeFw)~
+ [Developing a RESTful AP with Hapi](https://auth0.com/blog/developing-restful-apis-with-hapijs/)