var greeting = ['สวัสดี', 'หวัดดี', 'สัวสดี', 'hello', 'hi', 'หวัดดี'];
var name = ['name', 'ชื่อ', 'ซื่อ', 'ชือ', 'ชิ่อ'];

function sendMessage(text) {
    if (greeting.includes(text)) {
        return 'Hello';
    }
    else if (name.includes(text)) {
        return 'ชื่อนานะ'
    }
    else {
        return 'sdfdsf'
    }
}

module.exports = {
    sendMessage
};