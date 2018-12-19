const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const {sendMessage} = require('./words/send-message');
const {pushMessage, replyMessage} = require('./api/messaging-api');
const {Users} = require('./utils/users');
var users = new Users();

app.set('view engine', 'hbs');
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

const port = process.env.PORT || 3000;
process.env.TZ = 'Asia/Bangkok';

app.get("/", (req, res) => {
    res.render('index.hbs');
});

app.post("/webhook", (req, res) => {
    var type = req.body.events[0].type;
    var replyToken = req.body.events[0].replyToken;
    var userId = req.body.events[0].source.userId
    users.addUser(userId);

    if (type == 'follow') {
        pushMessage(userId, 'สวัสดีครับ');
    }
    else if (type == 'message') {
        var text = req.body.events[0].message.text.replace(/\s+/g, "");

        if (typeof text !== 'undefined') {
            var replyText = sendMessage(text.toLowerCase());
            replyMessage(replyToken, users.getUsers());
        }
    }
    res.sendStatus(200)
});

app.listen(port, () => {
    console.log('Starting port');
});
