var greeting = ['สวัสดี', 'หวัดดี', 'สัวสดี', 'hello', 'hi', 'หวัดดี'];
var name = ['name', 'ชื่อ', 'ซื่อ', 'ชือ', 'ชิ่อ','ชื่ออะไร'];
var laugh = ['55', 'hah', 'ฮ่าๆ', 'ถถถ', 'ฮา'];
var bye = ['ออกไป', 'บาย'];
var bedTime = ['นอนกี่โมง', 'นอนยัง'];
var cute = ['เธอน่ารัก','เธอน่ารักอะ','น่ารักจัง'];
var damn = ['ควย', 'ควาย','โง่','สัส','เหี้ย'];
var eat = ['กินไรยัง'];
var goodNight = ['ฝันดี', 'ฝันดีครับ'];
var hangOut = ['ไปเที่ยวกันไหม', 'ไปเที่ยวกัน','ไปเที่ยวกันมั้ย'];
var howAreYou = ['เป็นไงบ้างอะ','เป็นอย่างไร','เป็นไงบ้าง','เป็นไง'];
var howAreYouDo = ['ทำไรอยู่','ทำอะไรอยู่'];
function sendMessage(text) {
    if (greeting.includes(text)) {
        return 'สวัสดีค่ะ';
    }
    else if (name.includes(text)) {
        return 'ชื่อนานะ'
    }
    else if (laugh.includes(text)) {
        return 'ขำไร'
    }
    else if (bye.includes(text)) {
        return 'ไปไหน'
    }
    else if (bedTime.includes(text)) {
        return 'สักพักก็นอนแล้วละ'
    }
    else if (cute.includes(text)) {
        return 'ผู้หญิงน่ารักมีเยอะแยะ'
    }
    else if (damn.includes(text)) {
        return 'เสียใจ'
    }
    else if (eat.includes(text)) {
        return 'กำลังกินเลย มาชิมป่าว อร่อยนะ'
    }
    else if (goodNight.includes(text)) {
        return 'ฝันดีนะ ฝันถึงเราด้วยนะ'
    }
    else if (hangOut.includes(text)) {
        return 'ขอคิดดูก่อนนะ'
    }
    else if (howAreYou.includes(text)) {
        return 'สบายดีนะ'
    }
    else if (howAreYouDo.includes(text)) {
        return 'ไม่ได้ทำไร'
    }
    
}

module.exports = {
    sendMessage
};