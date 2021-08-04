//a Separate responsibility  for  Flowers  HTTP request handling

var customer = require('../dal/customersdal');

exports.getAll = function(req, res) {
  console.log("calling controller function");
  customer.getAllcustomer(function(err, customer) {
    if (err)
      res.send(err);
    res.send(customer);
  });
};

exports.insert = function(req, res) {
  var new_customer = new customer(req.body);
  console.log(new_customer.body);
  console.log(new_customer);

  //handles null error 
   if(!new_customer.fname || !new_customer.contactno){
      res.status(400).send({ error:true, message: 'Please provide customer/status' });
    }
   else{
    customer.createcustomer(new_customer, function(err, customer) {
      if (err)
      res.send(err);
    res.json(customer);
    });
  }
};

exports.getBy = function(req, res) {
    customer.getcustomerById(req.params.id, function(err, customer) {
    if (err)
      res.send(err);
    res.json(customer);
  });
};

exports.update = function(req, res) {
    customer.updateById(req.params.id, new customer(req.body), function(err, customer) {
    if (err)
      res.send(err);
    res.json(customer);
  });
};

exports.remove = function(req, res) {
    customer.remove( req.params.id, function(err, customer) {
    if (err)
      res.send(err);
    res.json({ message: 'customer successfully deleted' });
  });
};