
const User = require('../models/users')
const mongoose = require('mongoose')
mongoose.connect(`mongodb+srv://PhonebookoriDb:WsG9IKGGfG2WbtLn@firstmongo.w0kdo.mongodb.net/mongo_practice?retryWrites=true&w=majority`)
mongoose.connection.on('connected', () => {
  console.log('Mongo DB connected')
})

const usersCollection = [
  { username: 'GoodGuyGreg', first_name: 'Good Guy', last_name: 'Greg' },
  { username: 'ScumbagSteve', first_name: 'Scumbag', last_name: 'Steve' },
]
User.insertMany(usersCollection)
  .then(function () {
    console.log('Data inserted') // Success
  })
  .catch(function (error) {
    console.log(error) // Failure
  })