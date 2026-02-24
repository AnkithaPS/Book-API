# Book API

A RESTful API for managing books using Node.js, Express, and MongoDB.  
Allows users to create, read, update, and delete books in a database.

---

## Features

- Create new books  
- Read all books or a single book  
- Update book details  
- Delete books  

---

## Technologies Used

- Node.js  
- Express.js  
- MongoDB with Mongoose  
- dotenv for environment variables  

---

## Installation

1. **Clone the repository:**

git clone https://github.com/AnkithaPS/Book-API.git

2.**Installing dependencies:**

npm install

3.**Running the server:**

npm start

4.**Setting up environment variables**

.env 

## API Endpoints

- GET /books – fetch all books
- GET /books/:bookId – fetch a single book
- POST /books – create a book
- PUT /books/:id – update a book
- DELETE /books/:id – delete a book