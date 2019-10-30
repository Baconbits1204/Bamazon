DROP DATABASE IF EXISTS Bamazon;

CREATE DATABASE Bamazon;

USE Bamazon;

CREATE TABLE products (
	item_id INTEGER(11) AUTO_INCREMENT NOT NULL,
	product_name VARCHAR(30) NOT NULL,
	department_name VARCHAR(20) NOT NULL,
	price DECIMAL(10,2) NOT NULL,
	stock_quantity INTEGER(11) NOT NULL,
	PRIMARY KEY (item_id)
);

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES  ('Thumb-Tacks', 'Office Supplies', 2.75, 1000),
		('Cannon office printer', 'Office Supplies', 599.99, 722),
		('12 inch garden planters', 'Home and Garden', 12.50, 500),
		('Self watering pots', 'Home and Garden', 19.99, 1000),
		('Kylo Ren action figure', 'Children', 22.75, 10000),
		('BB-8 Star wars RC ball', 'Children', 60.75, 5000),
		('Basketball', 'Sports', 20.75, 3000),
		('Baseball bat', 'Sports', 10.99, 2000),
		('Size-XL Nike gym shorts', 'Clothing', 22.99, 500),
		('Size-L Nike gym shorts', 'Clothing', 21.99, 500),
		('The Internet of Money', 'Books', 17.25, 300),
		('Mastering Bitcoin', 'Books', 17.50, 300),
		('Isopropyl alcohol', 'Pharmacy', 4.95, 500),
		('Hydrogen peroxide', 'Pharmacy', 3.25, 500),
        ('iPhone charging cables', 'Electronics', 8.99, 800),
		('Android chargingf cables', 'Electronics', 8.25, 800),
        ('Wireless charging stand', 'Electronics', 40.45, 500),
        ('iRobot robotic vacuum', 'Electronics', 425.50, 700),
        ('iRobot robotic mop', 'Electronics', 635.40, 775),
		('Logitech wireless gaming mouse', 'Electronics', 33.00, 400);

        SELECT * FROM products