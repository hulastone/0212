"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function default_1(server) {
    server.route({
        method: 'GET',
        path: '/data/data2',
        handler(request, h) {
            return {
                statusCode: 200,
                message: 'OK',
                data: 'Khong co data',
            };
        }
    });
}
exports.default = default_1;
//# sourceMappingURL=data.js.map