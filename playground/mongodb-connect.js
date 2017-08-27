//const MongoClient = require('mongodb').MongoClient;
const {MongoClient, ObjectID} = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, db) => {
  if (err) {
    return console.log('unable to connect to mongo db server');
  }
  console.log('connected to mongodb server');

//  db.collection('Todos').insertOne({
//    text: 'something to do',
//    completed: false
//  }, (err, result) => {
//    if (err) {
//      return console.log('unable to insert todo', err);
//    }

//    console.log(JSON.stringify(result.ops, undefined, 2));
//  });
//  db.collection('Users').insertOne({
//    name: 'bob',
//    age: 61,
//    location: 'clearwater'
//  }, (err, result) => {
//    if (err) {
//      return console.log('unable to insert user', err);
//    }

//    console.log(result.ops[0]._id.getTimestamp());
//  });


  db.close();
});
