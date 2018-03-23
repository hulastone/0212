"use strict";
// const request: any = require('request');
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
}
Object.defineProperty(exports, "__esModule", { value: true });
const hapi_1 = require("hapi");
const data_1 = __importDefault(require("./routes/data"));
const hello_word_1 = __importDefault(require("./routes/hello-word"));
// request('http://www.google.com', function (error: Error, response: any, body: any) {
//     console.log('error:', error); // Print the error if one occurred
//     console.log('statusCode:', response && response.statusCode); // Print the response status code if a response was received
//     console.log('body:', body); // Print the HTML for the Google homepage.
// });
//const person = new Person('Phuong', 32);
//console.log(person.toString());
const server = new hapi_1.Server({
    host: '0.0.0.0',
    port: 8080
});
data_1.default(server);
hello_word_1.default(server);
server.start();
//# sourceMappingURL=index.js.map