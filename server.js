var express = require('express'),
    bodyParser = require('body-parser');

// The express app
var app = express();

// Create a mongodb connection
// and only start express listening once the connection is okay
var MongoClient = require('mongodb').MongoClient;
var db, itemsCollection;

MongoClient.connect('mongodb://127.0.0.1:27017', (err, client) => {
    if (err) throw err;

    var db = client.db('demo');
    itemsCollection = db.collection('items');

    app.listen(3000);
    console.log('Listening on port 3000');
});

// Create a router that can accept JSON
var router = express.Router();

router.use(bodyParser.json());

// Setup the collection routes
router.route('/')
    .get((req, res, next) => {
        itemsCollection.find().toArray((err, docs) => {
            res.send({
                status: 'Items found',
                items: docs
            });
        });
    })
    .post((req, res, next) => {
        var item = req.body;
        itemsCollection.insertOne(item, (err, docs) => {
            res.send({
                status: 'Item added',
                itemId: item._id
            });
        });
    });

// Setup the item routes
router.route('/:id')
    .delete((req, res, next) => {
        var id = req.params['id'];

        console.log(id);
        
        //var lookup = { _id: new mongodb.ObjectID(id) };
        itemsCollection.deleteOne({ _id: id }, (err, reesults) => {
            res.send({ status: 'Item cleared' });
        });
    });

app.use(express.static(`${__dirname}/public`))
   .use('/todo', router);

