class Messages {
    constructor () {
        this.messages = [];
    }
    addMessage (text, userId) {
        var message = {text, userId};
        this.messages.push(message);
        return message;
    }
    getMessagesById (userId) {
        var messages = this.messages.filter((message) => message.userId === userId);
        var textArray = messages.map((message) => message.text);

        return textArray;
    }
    getMessages() {
        return this.messages;
    }
}

module.exports = {
    Messages
};