
// const request: any = require('request');

import { Person } from './person';
import request from 'request';
import { Server, ResponseToolkit, Request } from 'hapi';
import data from './routes/data';
import helloWork from './routes/hello-word';
import * as cluster from 'cluster';
import * as os from 'os';

// request('http://www.google.com', function (error: Error, response: any, body: any) {
//     console.log('error:', error); // Print the error if one occurred
//     console.log('statusCode:', response && response.statusCode); // Print the response status code if a response was received
//     console.log('body:', body); // Print the HTML for the Google homepage.
// });
const person = new Person('Phuong', 32);
console.log(person.toString());

if (cluster.isMaster) {
    for (const item of os.cpus()) {
        const worker = cluster.fork();
    }
    /*cluster.on('exit', () => {
        console.log('Worker die. Fork new.')
        cluster.fork();
    })*/
} else {
    const server = new Server({
        host: '0.0.0.0',
        port: 80
    });


    helloWork(server);
    data(server);

    server.start();
}