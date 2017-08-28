//const MongoClient = require('mongodb').MongoClient;
const {MongoClient, ObjectID} = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, db) => {
  if (err) {
    return console.log('unable to connect to mongo db server');
  }
  console.log('connected to mongodb server');

// delete many
//db.collection('Todos').deleteMany({ text: 'eat lunch'}).then((result) => {
//  console.log(result);
//});
// delete one
//db.collection('Todos').deleteOne({ text: 'eat lunch'}).then((result) => {
//  console.log(result);
//});
// find one and delete
//db.collection('Todos').findOneAndDelete({completed: false}).then ((result) => {
//  console.log(result);
//});
//db.collection('Users').deleteMany({name: 'bob'});

db.collection('Users').findOneAndDelete({
  _id: new ObjectID("59a251be7bdce02f6ca0135a")
}).then((results) => {
  console.log(JSON.stringify(results, undefined, 2));
});
  //db.close();
});
