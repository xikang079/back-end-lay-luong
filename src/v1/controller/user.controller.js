const UserService = require('../services/user.service');

class UserController{
    static getAllUsers = async (req, res, next) =>{
        res.send({
            message: 'Get all users API is working!',
            metedata: await UserService.getAllUsers(),
        });
    }

    static getUserByName = async (req, res, next) => {
       res.send({
        message: "Get user by name API is working!",
        metadata: await UserService.getUserByName(req.params.username),
       })
    }
}

module.exports = UserController;