var MongoClient = require('mongodb').MongoClient;

var demoPerson = { name: 'John', lasname: 'Smith' };
var findKey = { name: 'John' };
var url = 'mongodb://127.0.0.1:27017';
var dbName = 'demo';

MongoClient.connect(url, (err, client) => {
    if (err) throw err;
    console.log('Successfully connected');

    const db = client.db(dbName);
    var collection = db.collection('people');

    collection.insertOne(demoPerson, (err, docs) => {

        console.log(`Inserted ${JSON.stringify(docs.ops[0])}`);
        console.log(`ID: ${demoPerson._id}`);

        collection.find(findKey).toArray((err, results) => {
            console.log(`Found results: ${JSON.stringify(results)}`);

            collection.deleteOne(findKey, (err, results) => {
                console.log('Deleted person');
                
                client.close();
            });
        });
    });
});
