DataBase MySQL:
    Structure:

CREATE SCHEMA `limonarium` DEFAULT CHARACTER SET utf8 ;

        CREATE TABLE users
        (
        user_id int(25) AUTO_INCREMENT,
        user_name varchar(30) NOT NULL,
        user_email varchar(35) NOT NULL UNIQUE,
        user_address varchar(255) NOT NULL,
        user_status int(11) DEFAULT '1',
        user_picture varchar(255) DEFAULT 'img/user_avatar/default-avatar.png',
        PRIMARY KEY (user_id)
        );

        CREATE TABLE products
        (
        product_id int (255) AUTO_INCREMENT,
        product_name varchar (100) NOT NULL,
        product_available bool NOT NULL,
        product_height int (25) NOT NULL,
        product_production varchar (30) NOT NULL,
        product_picture varchar(255) DEFAULT 'img/products/default-prod.png',
        product_price int (25) NOT NULL,
        product_count int (5) NOT NULL,
        PRIMARY KEY (product_id)
        );

        CREATE TABLE cart
        (
        cart_id int(25) AUTO_INCREMENT,
        cart_user_id varchar(30) NOT NULL,
        cart_product_id varchar(35) NOT NULL UNIQUE,
        cart_product_count int(3) DEFAULT '1',
        cart_execute bool,
        PRIMARY KEY (cart_id)
        );

        CREATE TABLE description
        (
        descr_id int(25) AUTO_INCREMENT,
        descr_product_id varchar(35) NOT NULL,
        descr_product text(35) NOT NULL,
        PRIMARY KEY (descr_id)
        );

        CREATE TABLE feedback
        (
        feedback_id int(25) AUTO_INCREMENT,
        feedback_product_id varchar(35) NOT NULL,
        feedback_user_id
        feedback_product text(35) NOT NULL,
        PRIMARY KEY (feedback_id)
        );