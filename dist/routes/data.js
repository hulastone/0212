"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mailservice_1 = require("../mail/mailservice");
function default_1(server) {
    server.route({
        method: 'POST',
        path: '/mail',
        handler(request, h) {
            //   const query = typeof request.query === 'string' ? qs.parse(request.query) : request.query;
            const content = request.payload;
            var to = content.to;
            var subject = content.subject;
            var body = content.body;
            const mail = new mailservice_1.MailService(to, subject, body);
            mail.SendMail();
            return {
                statusCode: 200,
                message: 'OK',
                data: 'fdsfdsf',
            };
        }
    });
}
exports.default = default_1;
//# sourceMappingURL=data.js.map