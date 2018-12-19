const request = require('request');
const accessToken = 'gAUGCPQSFxlvvlwwvO3EuUCQFJZR5cAf2hCBlZRrHJOXYlJYgEXS4Ba+xBr2VGmt4Kre3ID9eusD3DSx8JgMPJWR0uBrdUCh8FV6VIpDr+vSSYIKqcYhV/U3ujDyPv6LP+BQo61lH5Us2K+HIU2TFQdB04t89/1O/w1cDnyilFU=';

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

function leaveGroup (groupId) {
    request({
        headers: {
            'Authorization': `Bearer ${accessToken}`
        },
        url: `https://api.line.me/v2/bot/group/${groupId}/leave`,
        method: 'POST',
        json: true
    }, function (err, res, body) {
        if (err) console.log('error')
        if (res) console.log('success')
        if (body) console.log(body)
    })
}

module.exports = {
    pushMessage,
    replyMessage,
    leaveGroup
}