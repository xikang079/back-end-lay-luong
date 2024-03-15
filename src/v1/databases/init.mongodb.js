const mongoose = require('mongoose')

//connect mongoose
mongoose.connect(`mongodb+srv://${process.env.USERNAME}:${process.env.PASSWORD}@atlascluster.l3z80in.mongodb.net/`).then( _ => console.log('Connected mongoose success!...'))
.catch( err => console.error(`Error: connect:::`, err))

module.exports = mongoose;