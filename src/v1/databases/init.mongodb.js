const mongoose = require('mongoose');
const config = require('../config/config.app');

const dbUsername = config.db.usernameDev || config.db.usernameProduct;
const dbPassword = config.db.passwordDev || config.db.passwordProduct;
const dbName = config.db.name || 'app-lay-luong'; 

// Kết nối mongoose
mongoose.connect(`mongodb+srv://${dbUsername}:${dbPassword}@atlascluster.l3z80in.mongodb.net/${dbName}?retryWrites=true&w=majority`)
    .then(_ => console.log('Kết nối MongoDB thành công!'))
    .catch(err => console.error(`Lỗi: Không thể kết nối`, err));

module.exports = mongoose;
