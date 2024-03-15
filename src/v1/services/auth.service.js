const fs = require('node:fs');
const bcrypt = require('bcrypt');
const { AuthError } = require('../core/error.response');

class AuthService{
    static register = (params) => {
        const { username,password } = params;
        const stringUsers = fs.readFileSync('user.txt', 'utf8');
        let listUser = stringUsers ? JSON.parse(stringUsers) : [];
        
        // check user
        const userExits = listUser.find(user => user.username == username);
        if (userExits) throw new AuthError('User is already exists');

        // hash password
        const salt = bcrypt.genSaltSync(10);
        const hashPassword = bcrypt.hashSync(password, salt);
        

         // save user
        fs.writeFile('user.txt', JSON.stringify([...listUser, {id : 1, username, hashPassword}]), err =>{
            if(err) {
                console.log(err);
            }
            console.log("success");
        });

        return {
            username,
        };
    }

    static login = (params) => {
        const { username, password } = params;
        const stringUsers = fs.readFileSync('user.txt', 'utf8');
        let listUser = stringUsers ? JSON.parse(stringUsers) : [];

        // check user
        const user = listUser.find(user => user.username == username);
        if (!user) throw new AuthError('User not found');

        // check password
        const isPasswordValid = bcrypt.compareSync(password, user.hashPassword);
        if (!isPasswordValid) throw new AuthError('Password is not valid');

        return {
            username,
        };
    }
}

module.exports = AuthService;