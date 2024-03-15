const fs = require('node:fs');  

class UserService{
    static getAllUsers = () => {
        const stringUsers = fs.readFileSync('user.txt', 'utf8');
        let listUsers = stringUsers ? JSON.parse(stringUsers) : [];
        return listUsers;
    }

    static getUserByName = (username) => {
        const stringUsers = fs.readFileSync('user.txt', 'utf8');
        let user = stringUsers ? JSON.parse(stringUsers) : [];

        return user.find(user => user.username == username);
    }
}

module.exports = UserService;