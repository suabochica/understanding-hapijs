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

## Refs
+ [Hapi.js Framework Chars Course _version outdated_](https://www.youtube.com/watch?v=2lprC0yYeFw)
+ [Developing a RESTful AP with Hapi](https://auth0.com/blog/developing-restful-apis-with-hapijs/)