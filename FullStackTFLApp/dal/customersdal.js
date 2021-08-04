var sql = require('./mysqlconnect');
var customer = function(customer){
    //Constructor
    this.id=customer.id
    this.fname = customer.fname;
    this.lname = customer.lname;
    this.email = customer.email;
    this.contactno = customer.contactno;
};

//Attach member function to Model to perform DatABASE  CRUD operations

customer.createcustomer = function (newcustomer, result) {  
        console.log("New customer to be added ");
        console.log(newcustomer);
        sql.query("INSERT INTO customers set ?", newcustomer, function (err, res) {
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

customer.getcustomerById = function (customerId, result) {
        sql.query("Select * from customers where Id = ? ", customerId, function (err, res) {             
                if(err) {
                  console.log("error: ", err);
                  result(err, null);
                }
                else{
                  result(null, res);     
                }
            });   
};


customer.getAllcustomer = function (result) {
      console.log("Invoking dal getall customer");
      
        sql.query("Select * from customers", function (err, res) {
                if(err) {
                  console.log("error: ", err);
                  result(null, err);
                }
                else{
                  console.log('customer : ', res);  
                  result(null, res);
                }
            });   
};

customer.updateById = function(id, customer, result){

  sql.query("UPDATE customers SET fname=? WHERE Id = ?", [customer.fname, id], 
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


customer.remove = function(id, result){
    sql.query("DELETE FROM customers WHERE Id = ?", [id],
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

module.exports=customer;