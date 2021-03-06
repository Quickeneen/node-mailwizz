let Request = require('./Request');
let base64Encode = require('../utils/encrypt').base64Encode;

const path = '/email-blacklist';

class EmailBlacklist extends Request {
    constructor(config) {
        super(config);
    }

    /**
     *
     * @param email
     *
     */

    create(email,reason) {
        if (!email && !reason) {
            return Promise.reject('miss parameters');
        }

        let data = {
            email: email,
            reason: reason
        };

        this.url = path;
        this.method = Request.Type.POST;
        this.data = data;

        return this.send();
    }
}

module.exports = EmailBlacklist;
