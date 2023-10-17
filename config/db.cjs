// connect mongoose to the db
// later when we use mongoose somewhere else, it will already be connected

const mongoose = require('mongoose');

let connectionString =`mongodb+srv://josephachang02:${process.env.MONGO_PASS}@cluster0.s4trlob.mongodb.net/?retryWrites=true&w=majority`

mongoose.connect()