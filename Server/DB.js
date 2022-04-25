const mongoose = require('mongoose')



const connectionString = 'mongodb://localhost/react-shopping-cart'

mongoose.connect(process.env.MONGO_URL ||connectionString, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => { console.log('Database is Connecting Successfuly') })
