const comments = require('../models/comments');
const Posts = require('../models/posts');
const mongoose = require('mongoose');
mongoose
  .connect(`mongodb+srv://PhonebookoriDb:WsG9IKGGfG2WbtLn@firstmongo.w0kdo.mongodb.net/mongo_practice?retryWrites=true&w=majority`)
  .then(result => {
    console.log('connected to MongoDB job');
  })
  .catch(error => {
    console.log('error connecting to MongoDB:', error.message);
  });
//
async function getObjId(){

}

const commentsData = [
    {
      username: 'GoodGuyGreg',
      comment: 'Hope you got a good deal!',
      post: "618e4cfcae3576df32904867",
    },
    {
      username: 'GoodGuyGreg',
      comment: "What's mine is yours!",
      post: "618e4cfcae3576df32904868",
    },
    {
      username: 'GoodGuyGreg',
      comment: "Don't violate the licensing agreement!",
      post: "618e4cfcae3576df32904869",
    },
    {
      username: 'ScumbagSteve',
      comment: "It still isn't clean",
      post: "618e4cfcae3576df32904864",
    },
    {
      username: 'ScumbagSteve',
      comment: 'Denied your PR cause I found a hack',
      post: "618e4cfcae3576df32904866",
    },
  ];

  comments.insertMany(commentsData)
  .then(function () {
    console.log('Data inserted') // Success
  })
  .catch(function (error) {
    console.log(error) // Failure
  })