# Back-End-E-Commerce

## Description
This is a back-end only application,that one can test with Insomnia. It uses npm libraries express, mysql2, sequelize and dotenv. It is designed to keep track of the inventory of an e-commerce store. It can take the price, available stock, category, type of product, etc.
## Installation
Please download this entire repository from my GitHub

## Usage
This application uses express, sequelize and mysql2, and the dotenv npm libraries. To run this you must have mySQL set up on yuor computer as well. After downloading this application, please run npm i to download the npm libraries, and create a '.env' file. Within the file have a DB_NAME, DB_USER, and DB_PASS variable's named, and their values set to your personal information. Be sure to include this file in your gitignore, if it isn't already!

To establish the database first run mysql in your terminal, using the command 'mysql -u root -p', enter your password(if you have one, if not hit enter), and then run 'SOURCE db/schema.sql'

Close mysql. If you wish to use some seed data you can run 'npm run seed' to put some seed data into yuor database for testing. To run the server, use 'node server.js'. After the server is running open up Insomnia, and type in the URL into the search bar. 

From there you can select 'GET','POST','PUT','DELETE' and include the desired endpoint to the URL ('products','categories','tags')

## Credits
N/A

## License
N/A

## Link to Walkthrough
[Link to Walkthrough](https://drive.google.com/drive/folders/166qgJm2Y7NczMSka-IRam4WI8wPJJeoZ?usp=sharing)