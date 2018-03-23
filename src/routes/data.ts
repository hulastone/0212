import { Server, ResponseToolkit, Request } from "hapi";
import { MailService } from '../mail/mailservice';


export default function (server: Server) {
    server.route({
        method: 'POST',
        path: '/data',
        handler(request: Request, h: ResponseToolkit) {

            //   const query = typeof request.query === 'string' ? qs.parse(request.query) : request.query;
            
            const content = request.payload as { to: string; subject: string; body: string }           

            var to = content.to;
            var subject = content.subject;
            var body = content.body;
            const mail = new MailService(to, subject, body);
            mail.SendMail();

            return {
                statusCode: 200,
                message: 'OK',
                data: 'fdsfdsf',
            }
        }
    });
}
