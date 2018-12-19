const words = require('./words.js');

function sendMessage(text) {
    if (words.greeting.includes(text)) {
        return 'Hello';
    }
    else {
        return 'sdfdsf'
    }
}

module.exports = {
    sendMessage
};