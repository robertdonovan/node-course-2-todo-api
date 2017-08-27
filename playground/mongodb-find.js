//const MongoClient = require('mongodb').MongoClient;
const {MongoClient, ObjectID} = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, db) => {
  if (err) {
    return console.log('unable to connect to mongo db server');
  }
  console.log('connected to mongodb server');

//  db.collection('Todos').find({
//    _id: new ObjectID('59a24d6129a22b3a10263645')
//  }).toArray().then((docs) => {
//    console.log('todos');
//    console.log(JSON.stringify(docs, undefined, 2));
//  }, (err) => {
//    console.log('unable to fetch todos', err);
//  });
//db.collection('Todos').find().count().then((count) => {
//  console.log(`todos count: ${count}`);
//}, (err) => {
//  console.log('unable to fetch todos', err);
//});
  db.collection('Users').find({
    name: 'bob'
  }).toArray().then((docs) => {
    console.log('users');
    console.log(JSON.stringify(docs, undefined, 2));
  }, (err) => {
    console.log('unable to fetch users', err);
  });

  //db.close();
});
