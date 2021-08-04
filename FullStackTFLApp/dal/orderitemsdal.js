var sql = require('./mysqlconnect');
var orderitem = function(orderitem){
    this.orderitemid=orderitem.orderitemid;
    this.orderid=orderitem.orderid;
    this.flowerid = orderitem.flowerid;
    this.quantity = orderitem.quantity;
   
};
orderitem.createorderitem = function (neworderitem, result) {  
        console.log("New orderitem to be added ");
        console.log(neworderitem);
        sql.query("INSERT INTO orderitems set ?", neworderitem, function (err, res) {
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

orderitem.getorderitemById = function (orderitemId, result) {
        sql.query("Select * from orderitems where orderitemid = ? ", orderitemId, function (err, res) {             
                if(err) {
                  console.log("error: ", err);
                  result(err, null);
                }
                else{
                  result(null, res);     
                }
            });   
};


orderitem.getAllorderitem = function (result) {
      console.log("Invoking dal getall orderitem");
      
        sql.query("Select * from orderitems", function (err, res) {
                if(err) {
                  console.log("error: ", err);
                  result(null, err);
                }
                else{
                  console.log('orderitem : ', res);  
                  result(null, res);
                }
            });   
};

orderitem.updateById = function(id, orderitem, result){

  sql.query("UPDATE orderitems SET quantity=? WHERE orderitemid = ?", [orderitem.quantity, id], 
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


orderitem.remove = function(id, result){
    sql.query("DELETE FROM orderitems WHERE orderitemid = ?", [id],
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

module.exports=orderitem;