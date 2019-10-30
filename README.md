# Bamazon

A Command line interface built with node.js and MySQL to simulate an online storefront for customers. 

## Getting Started

- Clone repository
- Create a MYSQL database called 'Bamazon', reference schema.sql
- Create a .env file with your SQL server password set to SECRET_KEY=<<YOURKEYHERE>>
- Run command in Terminal or Gitbash 'npm install'
- Run command node bamazonCustomer.js
- Run 'ctrl + c' to exit mode

### What the JavaScript Does

1. `BamazonCustomer.js`

    * Displays a table of the products.

    * Prompts customer to input which product they would like. 

    * Asks for the desired quantity.

      * If there is enough of the product stocked in the table it will return the customers total, and update the stock.
      * If there isn't enough of the product in stock, it will tell the user that there's not enough in stock.
     
-----------------------

## Demo Videos

* BamazonCustomer.js ()


### Prerequisites

```
- Node.js - Download the latest version of Node https://nodejs.org/en/
- Create a MYSQL database called 'Bamazon', reference schema.sql
- Create a .env file with your SQL server password seT to SECRET_KEY=<<YOURKEYHERE>>
```

## Built With

* Visual Studio Code
* MySQLWorkbench
* Terminal/Gitbash

## Author

* **Rafael Hermoso** - [Rafael Hermoso](https://github.com/Baconbits1204)