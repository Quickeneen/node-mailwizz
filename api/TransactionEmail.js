let Request = require('./Request');
let base64Encode = require('../utils/encrypt').base64Encode;

const path = '/transactional-emails';

class TransactionEmail extends Request {
    constructor(config) {
        super(config);
    }

    /**
     *
     * @param toEmail
     * @param fromName
     * @param fromEmail
     * @param replyToEmail
     * @param subject
     * @param listUid
     * @param body
     * @param plainText
     * @param sendAt
     */

    create(toEmail, fromName, fromEmail, replyToEmail, subject, body, plainText,listUid, sendAt) {
        if (!toEmail || !fromName || !fromEmail  || !replyToEmail || !subject || !body || !plainTExt || !listUid || !sendAt) {
            return Promise.reject('miss parameters');
        }

        let data = {
            to_email: toEmail,
            from_name: fromName,
            from_email: fromEmail,
            reply_to_email: replyToEmail,
            subject: subject,
            list_uid: listUid,
            send_at: sendAt
        };

        if (body) data.body = base64Encode(body);
        if (plainText) data.plain_text = base64Encode(plainText);

        this.url = path;
        this.method = Request.Type.POST;
        this.data = {email: data};

        return this.send();
    }
}

module.exports = TransactionEmail;
