const request = require('request');
const accessToken = '';

function pushMessage (sender, text) {
    let data = {
      to: sender,
      messages: [
        {
          type: 'text',
          text: text
        }
      ]
    }
    request({
        headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${accessToken}`
        },
        url: 'https://api.line.me/v2/bot/message/push',
        method: 'POST',
        body: data,
        json: true
    }, function (err, res, body) {
        if (err) console.log('error')
        if (res) console.log('success')
        if (body) console.log(body)
    })
}

function replyMessage (replyToken, text) {
    let data = {
        replyToken: replyToken,
        messages: [
          {
            type: 'text',
            text: text
          }
        ]
    }
    request({
        headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${accessToken}`
        },
        url: 'https://api.line.me/v2/bot/message/reply',
        method: 'POST',
        body: data,
        json: true
    }, function (err, res, body) {
        if (err) console.log('error')
        if (res) console.log('success')
        if (body) console.log(body)
    })
}

module.exports = {
    pushMessage,
    replyMessage
}
