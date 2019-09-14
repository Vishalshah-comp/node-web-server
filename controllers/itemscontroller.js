const Item = require('../model/shoppingItem');

exports.getItems = (req, res, next) => {
    Item.find(function (err, items) {
        if(err){
            res.json(err);
        }
        else{
            res.json(items);
        }
    });
    //res.send('This is a /test path on the website');
    //next();
}

exports.postItem = (req, res, next) => {
    let newShoppingItem = new Item({
        itemName : req.body.itemName,
        itemQuantity : req.body.itemQuantity,
        itemBought : req.body.itemBought
    });
    
    newShoppingItem.save((err, item) => {
        if (err){
            res.json(err);
        }
        else{
            res.json({msg: "New Item has been inserted"});
        }
    });

}

exports.putItem = (req, res, next) => {
    Item.findOneAndUpdate({_id:req.params.id},{
        $set: {
        itemName:req.body.itemName,
        itemQuantity: req.body.itemQuantity,
        itemBought : req.body.itemBought
        }
    }, 
    function(err, res){
        if(err){
            res.json(err);
        }
        else{
            res.json(res);
        }
    });    
} 

exports.deleteItem = (req, res, next) => {
    Item.deleteOne({
        _id:req.params.id
    }, (err, res) => {
        if(err){
            res.json(err);
        }
        else{
            res.json(res);
        }

    });
}