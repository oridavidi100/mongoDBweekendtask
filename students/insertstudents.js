const Student = require("../models/user");
const mongoose = require("mongoose");

const mongo = process.env.DATABASE;

// connecting to database
mongoose
    .connect('mongodb+srv://PhonebookoriDb:WsG9IKGGfG2WbtLn@firstmongo.w0kdo.mongodb.net/mongo_practice?retryWrites=true&w=majority')
    .then((result) => {
        console.log("connected to MongoDB");
    })
    .catch((error) => {
        console.log("error connecting to MongoDB:", error.message);
    });

const Students = [
  {
    name: 'Ido',
    surName: 'Arbel',
    birth: new Date('1998-01-26'),
    phone: '0526305421',
    gender: 'Male',
    courses: ['Java', 'Math'],
  },
  {
    name: 'Chen',
    surName: 'Halevi',
    birth: new Date('1997-03-11'),
    phone: '0526323421',
    gender: 'Male',
    courses: ['Math', 'Law'],
  },
  {
    name: 'Koren',
    surName: 'Gan-or',
    birth: new Date('1997-01-19'),
    phone: '0526305321',
    gender: 'Male',
    courses: ['JavaScript', 'Finance', 'Law'],
  },
  {
    name: 'Oryan',
    surName: 'Levy',
    birth: new Date('1998-04-02'),
    phone: '0542305321',
    gender: 'Male',
    courses: ['JavaScript', 'Law'],
  },
  {
    name: 'Yahalom',
    surName: 'Cohen',
    birth: new Date('1993-11-03'),
    phone: '0542305392',
    gender: 'Female',
    courses: ['Java', 'Law'],
  },
];

    Student.insertMany(Students)
      .then(function(){
        console.log("Data inserted")  // Success
      }).catch(function(error){
        console.log(error)      // Failure
    });
  

    