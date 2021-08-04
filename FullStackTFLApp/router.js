
var taskController=require("./controllers/taskscontroller");
var flowerController=require("./controllers/flowerscontroller");
var customersController=require("./controllers/customerscontroller");

var ordersController=require("./controllers/orderscontroller");
var orderitemsController=require("./controllers/orderitemscontroller");

module.exports=function(app){
    app.route("/api/tasks")
    .get(taskController.getAll)             //http://localhost:9898/api/tasks  GET
    .post(taskController.insert);           //http://localhost:9898/api/tasks      POST

    app.route("/api/tasks/:id")
      .get(taskController.getBy)            //http://localhost:9898/api/tasks/:id    GET
      .put(taskController.update)           //http://localhost:9898/api/tasks/:id    PUT
      .delete(taskController.remove);       //http://localhost:9898/api/tasks/:id   DELETE

    //Flowers HTTP request Mapping    
    app.route("/api/flowers")              
    .get(flowerController.getAll)           //http://localhost:9898/api/flowers/       GET  
    .post(flowerController.insert);         //http://localhost:9898/api/flowers/       POST

    app.route('/api/flowers/:id')
    .get(flowerController.getBy)           //http://localhost:9898/api/flowers/:id    GET
    .put(flowerController.update)          //http://localhost:9898/api/flowers/:id    PUT
    .delete(flowerController.remove);      //http://localhost:9898/api/flowers/:id    DELETE    


    app.route("/api/customers")              
    .get(customersController.getAll)           //http://localhost:9898/api/flowers/       GET  
    .post(customersController.insert);         //http://localhost:9898/api/flowers/       POST

    app.route('/api/customers/:id')
    .get(customersController.getBy)           //http://localhost:9898/api/flowers/:id    GET
    .put(customersController.update)          //http://localhost:9898/api/flowers/:id    PUT
    .delete(customersController.remove);      //http://localhost:9898/api/flowers/:id    DELETE  



    app.route("/api/orders")              
    .get(ordersController.getAll)          
    .post(ordersController.insert);         

    app.route('/api/orders/:id')
    .get(ordersController.getBy)          
    .put(ordersController.update)          
    .delete(ordersController.remove);      

    app.route("/api/orderitems")              
    .get(orderitemsController.getAll)          
    .post(orderitemsController.insert); 
            
    app.route('/api/orderitems/:id')
    .get(orderitemsController.getBy)           
    .put(orderitemsController.update)          
    .delete(orderitemsController.remove);       





};

