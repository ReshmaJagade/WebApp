var order = require('../dal/ordersdal');

exports.getAll = function(req, res) {
  console.log("calling controller function");
  order.getAllorder(function(err, order) {
    if (err)
      res.send(err);
    res.send(order);
  });
};

exports.insert = function(req, res) {
  var new_order = new order(req.body);
  console.log(new_order.body);
  console.log(new_order);

  //handles null error 
   if(!new_order.orderid || !new_order.amount){
      res.status(400).send({ error:true, message: 'Please provide order/status' });
    }
   else{
    order.createorder(new_order, function(err, order) {
      if (err)
      res.send(err);
    res.json(order);
    });
  }
};

exports.getBy = function(req, res) {
    order.getorderById(req.params.id, function(err, order) {
    if (err)
      res.send(err);
    res.json(order);
  });
};

exports.update = function(req, res) {
    order.updateById(req.params.id, new order(req.body), function(err, order) {
    if (err)
      res.send(err);
    res.json(order);
  });
};

exports.remove = function(req, res) {
    order.remove( req.params.id, function(err, order) {
    if (err)
      res.send(err);
    res.json({ message: 'order successfully deleted' });
  });
};