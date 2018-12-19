const words = require('./words.js');

function sendMessage(text) {
    if (words.greeting.includes(text)) {
        return 'Hello';
    }
    else if (words.name.includes(text)) {
        return 'ชื่อนานะ'
    }
    else {
        return 'sdfdsf'
    }
}

module.exports = {
    sendMessage
};