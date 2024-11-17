


#CRUD APPLICATION USING NODEJS

This is a web application built using **Node.js**, **Express.js**, **EJS**, and **MongoDB**. The project serves as a crud full-stack web applications.

## Features

- **MVC Architecture**: Clean separation of concerns using the Model-View-Controller pattern.
- **Dynamic Templating**: EJS is used for server-side rendering of dynamic content.
- **Database Integration**: MongoDB for storing and managing application data.
- **Express.js Framework**: A minimal and flexible Node.js framework for routing and middleware.
- **RESTful APIs**: Endpoints for CRUD operations.

---

## Installation

### Prerequisites
- [Node.js](https://nodejs.org/) installed
- [MongoDB](https://www.mongodb.com/) installed or a MongoDB Atlas account for cloud database

### Steps
1. Clone the repository:
   ```bash
   git clone https://github.com/akhileshverma92/CRUD_App
   cd CRUD_Ap
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Set up environment variables:
   Create a `.env` file in the root directory and add:
   ```env
   PORT=3000
   MONGO_URI=your_mongodb_connection_string
   ```

4. Run the application:
   ```bash
   npm start
   ```

5. Open your browser and navigate to:
   ```
   http://localhost:3000
   ```

---


---

## Routes

| Method | Endpoint       | Description                   |
|--------|----------------|-------------------------------|
| GET    | `/`            | Home page                    |
| GET    | `/read`        | Fetch all items              |
| POST   | `/creat`       | Create a new item            |
| POST   | `/edit/:userid`| Update an item by ID         |
| DELETE | `/delete/:id`  | Delete a single item by ID   |


---

## Technologies Used

- **Node.js**: JavaScript runtime
- **Express.js**: Web framework
- **EJS**: Template engine
- **MongoDB**: NoSQL database
- **Mongoose**: ODM for MongoDB

---

## Contributing

1. Fork the repository.
2. Create a new branch:
   ```bash
   git checkout -b feature-name
   ```
3. Commit your changes:
   ```bash
   git commit -m "Add feature-name"
   ```
4. Push to the branch:
   ```bash
   git push origin feature-name
   ```
5. Create a pull request.

---

## License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.

---

## Contact

For questions or collaboration, reach out at:
- GitHub: [akhileshverma92](https://github.com/akhileshverma92)
```
