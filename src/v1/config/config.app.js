const dev = {
    app : {
        host: 3000,
    },
    db : {
        usernameDev: process.env.USERNAMEE,
        passwordDev: process.env.PASSWORD,
        name: "app-lay-luong"
    }
}

const product = {
    app : {
        host: "",
    },
    db : {
        usernameProduct: process.env.USERNAMEE,
        passwordProduct: process.env.PASSWORD,
        name: "app-lay-luong"
    }
}

const config = { dev, product }
const env = process.env.MT || 'dev'

module.exports = config[env]