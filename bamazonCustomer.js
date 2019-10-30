//require mysql / inquirer / dotenv
var mysql = require('mysql');
var inquirer = require('inquirer');
require('dotenv').config();
//create connection to db
var connection = mysql.createConnection({
  host: "localhost",
  port: 3306,
  user: "root",
  password: process.env.SECRET_KEY,
  database: "Bamazon"
})

function start(){
//prints the items for sale and their details
connection.query('SELECT * FROM products', function(err, res){
  if(err) throw err;

  console.log('----------------------------------------Welcome to Bamazon----------------------------------------')
  console.log('--------------------------------------------------------------------------------------------------')

  for(var i = 0; i<res.length;i++){
    console.log("ID: " + res[i].item_id + " | " + "Product: " + res[i].product_name + " | " + "Department: " + res[i].department_name + " | " + "price: " + res[i].price + " | " + "QTY: " + res[i].stock_quantity);
    console.log('--------------------------------------------------------------------------------------------------')
  };

  console.log(' ');
  inquirer.prompt([
    {
      type: "input",
      name: "id",
      message: "What is the ID number of the product you want to buy?",
      validate: function(value){
        if(isNaN(value) == false && parseInt(value) <= res.length && parseInt(value) > 0){
          return true;
          
        } else{
          return false;
        }
      }
    },
    {
      type: "input",
      name: "quantity",
      message: "How many do you want to buy?",
      validate: function(value){
        if(isNaN(value)){
          return false;
        } else{
          return true;
        }
      }
    }
    ]).then(function(ans){
      var buyWhat = (ans.id)-1;
      var buyHowMuch = parseInt(ans.quantity);
      var finalTotal = parseFloat(((res[buyWhat].price)*buyHowMuch).toFixed(2));

      //check if quantity is sufficient
      if(res[buyWhat].stock_quantity >= buyHowMuch){

        //after purchase, updates quantity in Products
        connection.query("UPDATE products SET ? WHERE ?", [
        {stock_quantity: (res[buyWhat].stock_quantity - buyHowMuch)},
        {item_id: ans.id}
        ], function(err, result){
            if(err) throw err;
            console.log("Item(s) successfully purchased! Your final total is $" + finalTotal.toFixed(2) + ". Standard shipping rates may apply");
        });

        connection.query("SELECT * FROM products", function(err, deptRes){
          if(err) throw err;
          var index;
          for(var i = 0; i < deptRes.length; i++){
            if(deptRes[i].department_name === res[buyWhat].department_name){
              index = i;
              
            }
          }
          

        });

      } else{
        console.log("We don't have enough of that item in stock");
      }

      reprompt();
    })
})
}

//asks if they would like to purchase another item
function reprompt(){
  inquirer.prompt([{
    type: "confirm",
    name: "reply",
    message: "Do you want to buy a different product?"
  }]).then(function(ans){
    if(ans.reply){
      start();
    } else{
      console.log("Untill next time...");
      process.exit(0);
    }
  });
}

start();