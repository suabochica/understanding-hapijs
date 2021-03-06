'use strict';

const Hapi = require('hapi')
const mongoose = require('mongoose')

const DogController = require('./src/controllers/dog.controller')
const MongoDBUrl = 'mongodb://localhost:27017/dbdogs'


// Create a server with a host and port
const server = Hapi.server({
    host: 'localhost',
    port: 3000
});

// Add the route: h parameter stand for a response toolkit
server.route({
    method: 'GET',
    path: '/dogs',
    handler: DogController.list
});

server.route({
    method: 'GET',
    path: '/dogs/{id}',
    handler: DogController.get
});

server.route({
    method: 'POST',
    path: '/dogs',
    handler: DogController.post
});

server.route({
    method: 'PUT',
    path: '/dogs/{id}',
    handler: DogController.put
});

server.route({
    method: 'DELETE',
    path: '/dogs/{id}',
    handler: DogController.remove
});

// Start the server
const start =  async function() {
    try {
        await server.start();

        mongoose.connect(MongoDBUrl, {useNewUrlParser: true}).then(() => {
            console.log('Connected to the Mongo Server')
        }, (error) => {
            console.log(error)
        })
        mongoose.set('useCreateIndex', true)

        console.log(`Server running at: ${server.info.uri}`)
    }
    catch (error) {
        console.log(error);
        process.exit(1);
    }
};

start();