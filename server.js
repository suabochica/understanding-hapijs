'use strict';

const Hapi = require('hapi');

// Create a server with a host and port
const server = Hapi.server({
    host: 'localhost',
    port: 3000
});

// Add the route: h parameter stand for a response toolkit
server.route({
    method: 'GET',
    path: '/',
    handler: (request, h) => {
        return '<h1>hello world</h1>'
    }
});

// Start the server
const start =  async function() {
    try {
        await server.start();
    }
    catch (err) {
        console.log(err);
        process.exit(1);
    }

    console.log('Server running at:', server.info.uri);
};

start();