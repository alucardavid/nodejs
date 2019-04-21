var MongoClient = require('mongodb').MongoClient;

var demoPerson = { name: 'John', lastname: 'Smith' };
var findKey = { name: 'John' };
var url = 'mongodb://127.0.0.1:27017';
var dbName = 'demo';

MongoClient.connect(url, { useNewUrlParser: true}, (err, client) => {
    if (err) throw err;
    console.log('Successfully connected');

    const db = client.db(dbName);
    var collection = db.collection('people');

    collection.insertOne(demoPerson, (err, docs) => {
        console.log(`Inserted ${JSON.stringify(docs.ops[0])}`);
        console.log(`ID: ${demoPerson._id}`);

    });

    collection.updateOne({ _id: demoPerson._id }, { $set: { lastname: 'Pereira' }}, (err, result) => {
        if (err) {
            console.log('Was not possible to update');
        }
        else {
            console.log('Updated');
            
        }
    });

    // collection.find({}).toArray((err, docs) => {
    //     console.log(`Found results: ${JSON.stringify(docs)}`);

    //     // collection.deleteOne(findKey, (err, results) => {
    //     //     console.log('Deleted person');
            
    //     //     client.close();
    //     // });
    // });

    // collection.deleteMany({name: 'John'}, (err, result) => {
    //     if (err) {
    //         console.log('Was not possible delete theses peoples');
    //     }
    //     else{
    //         console.log('Deletados');
            
    //     }
    // });
    
    client.close();
});
