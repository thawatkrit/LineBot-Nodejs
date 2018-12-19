const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const {sendMessage} = require('./words/send-message');
const {pushMessage, replyMessage} = require('./api/messaging-api');
const {Users} = require('./utils/users');
const {Messages} = require('./utils/messages');
var users = new Users();
var messages = new Messages();

app.set('view engine', 'hbs');
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

const port = process.env.PORT || 3000;
process.env.TZ = 'Asia/Bangkok';

app.get("/", (req, res) => {
    res.render('index.hbs');
});

app.get("/admin", (req, res) => {
    res.render('admin.hbs', {
        text: Messages.getMessages('U1cdfde31d77b135318bd76d016f834a7')[0]
    });
});

app.post("/push", (req, res) => {
    var data = req.body;
    var userId = data.userId;
    var message = data.message;

    pushMessage(userId, message);
    res.redirect("/");
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
        messages.addMessage(text, userId);

        if (typeof text !== 'undefined') {
            var replyText = sendMessage(text.toLowerCase());
            replyMessage(replyToken, users.getUsers().length);
        }
    }
    res.sendStatus(200)
});

app.listen(port, () => {
    console.log('Starting port');
});
