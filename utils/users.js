class Users {
    constructor() {
        this.users = [];
    }

    addUser(userId) {
        if(!this.users.includes(userId)) {
            this.users.push(userId);
        }
        return userId;
    }
    getUsers() {
        return this.users;
    }
}

module.exports = {
    Users
}