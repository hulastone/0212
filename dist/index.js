"use strict";
// const request: any = require('request');
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
}
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result["default"] = mod;
    return result;
}
Object.defineProperty(exports, "__esModule", { value: true });
const person_1 = require("./person");
const hapi_1 = require("hapi");
const data_1 = __importDefault(require("./routes/data"));
const hello_word_1 = __importDefault(require("./routes/hello-word"));
const cluster = __importStar(require("cluster"));
const os = __importStar(require("os"));
// request('http://www.google.com', function (error: Error, response: any, body: any) {
//     console.log('error:', error); // Print the error if one occurred
//     console.log('statusCode:', response && response.statusCode); // Print the response status code if a response was received
//     console.log('body:', body); // Print the HTML for the Google homepage.
// });
const person = new person_1.Person('Phuong', 32);
console.log(person.toString());
if (cluster.isMaster) {
    for (const item of os.cpus()) {
        const worker = cluster.fork();
    }
    /*cluster.on('exit', () => {
        console.log('Worker die. Fork new.')
        cluster.fork();
    })*/
}
else {
    const server = new hapi_1.Server({
        host: '0.0.0.0',
        port: 80
    });
    hello_word_1.default(server);
    data_1.default(server);
    server.start();
}
//# sourceMappingURL=index.js.map