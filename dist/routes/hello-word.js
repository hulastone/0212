"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function default_1(server) {
    server.route({
        method: 'GET',
        path: '/hello-word',
        handler(request, h) {
            return {
                statusCode: 200,
                message: 'OK',
                data: 'Roong',
            };
        }
    });
}
exports.default = default_1;
//# sourceMappingURL=hello-word.js.map