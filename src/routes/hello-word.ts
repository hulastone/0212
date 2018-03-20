import { Server, ResponseToolkit } from "hapi";

export default function (server: Server) {
    server.route({
        method: 'GET',
        path: '/hello-word',
        handler(request: Request, h: ResponseToolkit) {
            return {
                statusCode: 200,
                message: 'OK',
                data: 'Roong',
            }
        }
    });
}