const AuthService = require("../services/auth.service");

class AuthController{
    static register =  async (req, res, next) => {
        res.send({
            message: 'Register API is working!',
            metadata: await AuthService.register(req.body),
        })
    }

    static login = async (req, res, next) => {
        res.send({
            message: 'Login API is working!',
            metadata: await AuthService.login(req.body),
        })
    }
}

module.exports = AuthController;