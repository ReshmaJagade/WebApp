//a Separate responsibility  for  Flowers  HTTP request handling

var Flower = require('../dal/flowersdal');

exports.getAll = function(req, res) {
  console.log("calling controller function");
  Flower.getAllFlower(function(err, flower) {
    if (err)
      res.send(err);
    res.send(flower);
  });
};

exports.insert = function(req, res) {
  var new_Flower = new Flower(req.body);
  //console.log(new_Flower.body);//only write new flower
  console.log(new_Flower);
  //handles null error 
   if(!new_Flower.name || !new_Flower.unitprice){
      res.status(400).send({ error:true, message: 'Please provide Flower/status' });
    }
   else{
    Flower.createFlower(new_Flower, function(err, flower) {
      if (err)
      res.send(err);
    res.json(flower);
    });
  }
};

exports.getBy = function(req, res) {
  Flower.getFlowerById(req.params.id, function(err, flower) {
    if (err)
      res.send(err);
    res.json(flower);
  });
};

exports.update = function(req, res) {
  Flower.updateById(req.params.id, new Flower(req.body), function(err, flower) {
    if (err)
      res.send(err);
    res.json(flower);
  });
};

exports.remove = function(req, res) {
  Flower.remove( req.params.id, function(err, flower) {
    if (err)
      res.send(err);
    res.json({ message: 'Flower successfully deleted' });
  });
};