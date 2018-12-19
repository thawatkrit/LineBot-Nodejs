const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const {sendMessage} = require('./words/send-message');

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

    if (type == 'join') {
        var groupId = req.body.events[0].source.groupId;

    }
    else if (type == 'follow') {
        var userId = req.body.events[0].source.userId
        pushMessage(userId, 'สวัสดีครับ');
    }
    else if (type == 'message') {
        var text = req.body.events[0].message.text.replace(/\s+/g, "");

        if (typeof text !== 'undefined') {
            var replyText = sendMessage(text.toLowerCase());
            var sourceType = req.body.events[0].source.type;

            if (sourceType === 'user') {
                var userId = req.body.events[0].source.userId;
                replyMessage(replyToken, replyText);
            }
            else {
                var groupId = req.body.events[0].source.groupId;
    
                if (replyText === 'exit') {
                    leaveGroup(groupId);
                } else {
                    replyMessage(replyToken, replyText);
                }
            }
        }
    }
    res.sendStatus(200)
});

app.listen(port, () => {
    console.log('Starting port');
});
