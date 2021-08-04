var sql = require('./mysqlconnect');
var order = function(order){
    this.orderid=order.orderid;
    this.ordatedate = order.ordatedate;
    this.customerid = order.customerid;
    this.amount = order.amount;
};

//Attach member function to Model to perform DatABASE  CRUD operations

order.createorder = function (neworder, result) {  
        console.log("New order to be added ");
        console.log(neworder);
        sql.query("INSERT INTO orders set ?", neworder, function (err, res) {
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

order.getorderById = function (orderId, result) {
        sql.query("Select * from orders where Id = ? ", orderId, function (err, res) {             
                if(err) {
                  console.log("error: ", err);
                  result(err, null);
                }
                else{
                  result(null, res);     
                }
            });   
};


order.getAllorder = function (result) {
      console.log("Invoking dal getall order");
      
        sql.query("Select * from orders", function (err, res) {
                if(err) {
                  console.log("error: ", err);
                  result(null, err);
                }
                else{
                  console.log('order : ', res);  
                  result(null, res);
                }
            });   
};

order.updateById = function(id, order, result){

  sql.query("UPDATE orders SET amount=? WHERE orderid  = ?", [order.amount, id], 
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


order.remove = function(id, result){
    sql.query("DELETE FROM orders WHERE orderid = ?", [id],
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

module.exports=order;