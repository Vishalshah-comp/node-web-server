var express = require('express');

var router = express.Router();

const Item = require('../model/shoppingItem');
const controllerItems = require('../controllers/itemscontroller');

//Comming from Controller for GET - api/items
router.get('/items', controllerItems.getItems);

//Comming from Controller for POST - api/item
router.post('/item', controllerItems.postItem);

//Comming from Controller for PUT - api/item
router.put('/item/:id',controllerItems.putItem);

//Comming from Controller for DELETE - api/item
router.delete('/item/id', controllerItems.deleteItem);


module.exports = router;