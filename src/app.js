const express = require('express');
const app = express();
const helmet = require('helmet')
const morgan = require('morgan')
const compression = require('compression')
require('dotenv').config()

// mongoose.connect('mongodb+srv://khang:123123123@atlascluster.l3z80in.mongodb.net/');
// mongoose.connection.once('open', function() {
//     console.log('Connection has been made, now make fireworks...');
// }).on('error', function(error) {
//     console.log('Connection error:', error);
// })

require('./v1/databases/init.mongodb')

//user middleware
// app.use(helmet())
// app.use(morgan('combined'))

// compress responses
app.use(compression())

// add body-parser
app.use(express.json())
app.use(express.urlencoded({
    extended: true
}))

//router
app.use(require('./v1/routes/index.router'))

// Error Handling Middleware called

app.use((req, res, next) => {
    const error = new Error("Not found");
    error.status = 404;
    next(error);
});

// error handler middleware
app.use((error, req, res, next) => {
    res.status(error.status || 500).send({
        error: {
            status: error.status || 500,
            message: error.message || 'Internal Server Error',
        },
    });
});

module.exports = app;