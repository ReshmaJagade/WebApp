var orderitem = require('../dal/orderitemsdal');
exports.getAll = function(req, res) {
  console.log("calling controller function");
  orderitem.getAllorderitem(function(err, orderitem) {
    if (err)
      res.send(err);
    res.send(orderitem);
  });
};

exports.insert = function(req, res) {
  var new_orderitem = new orderitem(req.body);
  console.log(new_orderitem.body);
  console.log(new_orderitem);

  //handles null error 
   if(!new_orderitem.quantity || !new_orderitem.flowerid){
      res.status(400).send({ error:true, message: 'Please provide orderitem/status' });
    }
   else{
    orderitem.createorderitem(new_orderitem, function(err, orderitem) {
      if (err)
      res.send(err);
    res.json(orderitem);
    });
  }
};

exports.getBy = function(req, res) {
    orderitem.getorderitemById(req.params.id, function(err, orderitem) {
    if (err)
      res.send(err);
    res.json(orderitem);
  });
};

exports.update = function(req, res) {
    orderitem.updateById(req.params.id, new orderitem(req.body), function(err, orderitem) {
    if (err)
      res.send(err);
    res.json(orderitem);
  });
};

exports.remove = function(req, res) {
    orderitem.remove( req.params.id, function(err, orderitem) {
    if (err)
      res.send(err);
    res.json({ message: 'orderitem successfully deleted' });
  });
};