import { Server, ResponseToolkit } from "hapi";

export default function (server: Server) {
    server.route({
        method: 'GET',
        path: '/data/data2',
        handler(request: Request, h: ResponseToolkit) {
            return {
                statusCode: 200,
                message: 'OK',
                data: 'Khong co data',
            }
        }
    });
}