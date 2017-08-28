//const MongoClient = require('mongodb').MongoClient;
const {MongoClient, ObjectID} = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, db) => {
  if (err) {
    return console.log('unable to connect to mongo db server');
  }
  console.log('connected to mongodb server');

//   db.collection('Todos').findOneAndUpdate({
//     _id: new ObjectID('59a37ca5da5ad6a7364a5a6e')
//   }, {
//     $set: {
//       completed: true
//     }
//   }, {
//     returnOriginal: false
//   }).then((result) => {
//     console.log(result);
//   });
db.collection('Users').findOneAndUpdate({
  _id: new ObjectID('59a24f08d182b0225c20c0a6')
}, {
  $set: {
    name: 'bob'
  },
  $inc: {
    age: 1
  }
}, {
  returnOriginal: false
}).then((result) => {
  console.log(result);
});

  //db.close();
});
