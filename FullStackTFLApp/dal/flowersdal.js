//a Separate responsibility  for  Flowers database crud operation
var sql = require('./mysqlconnect');

//model
//Object Oriented Approach
//define Model 
var Flower = function(Flower){

    //Constructor

    this.id=Flower.id
    this.name = Flower.name;
    this.descripation = Flower.descripation;
    this.unitprice = Flower.unitprice;
    this.quantity = Flower.quantity;
    this.likes=Flower.likes;
};

//Attach member function to Model to perform DatABASE  CRUD operations

Flower.createFlower = function (newFlower, result) {  
        console.log("New flower to be added ");
        console.log(newFlower);
        sql.query("INSERT INTO flowers set ?", newFlower, function (err, res) {
                if(err) {
                  console.log("error: ", err);
                  result(err, null);
                }
                else{
                  console.log(res.insertId);
                  result(null, res.insertId);
                }
            });           
};

Flower.getFlowerById = function (FlowerId, result) {
        sql.query("Select * from flowers where Id = ? ", FlowerId, function (err, res) {             
                if(err) {
                  console.log("error: ", err);
                  result(err, null);
                }
                else{
                  result(null, res);     
                }
            });   
};


Flower.getAllFlower = function (result) {
      console.log("Invoking dal getall Flowers");
      
        sql.query("Select * from flowers", function (err, res) {
                if(err) {
                  console.log("error: ", err);
                  result(null, err);
                }
                else{
                  console.log('Flowers : ', res);  
                  result(null, res);
                }
            });   
};

Flower.updateById = function(id, Flower, result){

  sql.query("UPDATE flowers SET name = ? WHERE Id = ?", [Flower.name, id], 
              function (err, res) {
                  if(err) {
                        console.log("error: ", err);
                        result(null, err);
                    }
                  else{   
                    result(null, res);
                    }
                }); 
};


Flower.remove = function(id, result){
    sql.query("DELETE FROM flowers WHERE Id = ?", [id],
                function (err, res) {
                  if(err) {
                      console.log("error: ", err);
                      result(null, err);
                  }
                  else{
                      result(null, res);
                  }
            }); 
};

module.exports=Flower;