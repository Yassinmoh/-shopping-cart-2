const mongoose = require('mongoose')



const connectionString = 'mongodb://localhost/react-shopping-cart'

mongoose.connect(connectionString, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => { console.log('Database is Connecting Successfuly') })
