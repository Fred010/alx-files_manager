# **Files Manager**

## **Description**
The **Files Manager** project is a backend application that allows users to upload, view, and manage files. This project integrates several key backend technologies such as **Node.js**, **MongoDB**, **Redis**, and **Bull** to build a robust, scalable, and performant file management platform. 

The goal is to provide a learning experience by implementing core features like authentication, file storage, background processing, and caching, which are common in real-world backend applications.

---

## **Features**
- User authentication via tokens (JWT).
- List all files for a user.
- Upload new files (images, documents, etc.).
- Change file permissions (e.g., private/public access).
- View files and serve them via HTTP.
- Generate thumbnails for image files using background workers.

---

## **Technologies Used**
- **Node.js**: Server-side JavaScript runtime.
- **Express**: Framework for building APIs.
- **MongoDB**: NoSQL database for file metadata storage.
- **Redis**: In-memory data store for caching and temporary storage.
- **Bull**: Queue system for background processing (e.g., generating thumbnails).
- **Mocha**: Testing framework for unit and integration tests.

---

## **Project Structure**
The project is organized as follows:

```
alx-files_manager/
│
├── utils/
│   ├── redis.js            # Redis utility class
│   ├── mongo.js            # MongoDB utility class
│   └── other utilities...  # Additional utility files
├── routes/                 # API routes
├── controllers/            # Route controllers
├── workers/                # Background workers
├── models/                 # Database models
├── tests/                  # Test files
├── main.js                 # Entry point
├── package.json            # Project dependencies
├── babel.config.js         # Babel configuration
├── eslintrc.js             # ESLint configuration
└── README.md               # Project documentation
```

---

## **Getting Started**

### **Prerequisites**
Before running the project, ensure you have the following installed:
- **Node.js** (v12.x or later)
- **MongoDB** (local or cloud instance)
- **Redis** (local or cloud instance)

### **Installation**
1. Clone the repository:
   ```bash
   git clone https://github.com/<your-username>/alx-files_manager.git
   ```
2. Navigate into the project directory:
   ```bash
   cd alx-files_manager
   ```
3. Install dependencies:
   ```bash
   npm install
   ```

---

## **Usage**

### **Run the Application**
To start the development server:
```bash
npm run dev
```

### **Environment Variables**
Create a `.env` file in the project root and configure the following variables:
```
PORT=5000
MONGO_URI=mongodb://localhost:27017/files_manager
REDIS_HOST=127.0.0.1
REDIS_PORT=6379
JWT_SECRET=your_secret_key
```

### **API Endpoints**
| **HTTP Method** | **Endpoint**          | **Description**               |
|------------------|-----------------------|--------------------------------|
| `POST`          | `/auth/login`         | Authenticate a user           |
| `GET`           | `/files`              | List all files                |
| `POST`          | `/files`              | Upload a new file             |
| `PUT`           | `/files/:id/permissions` | Change file permissions      |
| `GET`           | `/files/:id`          | View a specific file          |

---

## **Learning Objectives**
By the end of this project, you will be able to:
1. Create a RESTful API with **Express**.
2. Authenticate users using **JWT** (JSON Web Tokens).
3. Store and manage file metadata using **MongoDB**.
4. Use **Redis** for caching and temporary data storage.
5. Set up and manage background tasks using **Bull** and workers.
6. Generate image thumbnails dynamically.
7. Write and run tests with **Mocha**.

---

## **Key Components**

### **Redis Utility**
The `RedisClient` class provides the following:
- Check if Redis is alive (`isAlive`).
- Get a value by key (`get`).
- Set a value with an expiration (`set`).
- Delete a value by key (`del`).

### **MongoDB Utility**
Handles the connection to the MongoDB database and provides helper functions for interacting with collections.

### **Background Workers**
Uses `Bull` to manage queues for background tasks like thumbnail generation.

---

## **Resources**

- [Node.js Getting Started](https://nodejs.org/en/docs/guides/getting-started-guide/)
- [Express Documentation](https://expressjs.com/en/starter/installing.html)
- [MongoDB Documentation](https://www.mongodb.com/docs/)
- [Redis Documentation](https://redis.io/docs/)
- [Bull Documentation](https://github.com/OptimalBits/bull)
- [Mocha Documentation](https://mochajs.org/)
- [Nodemon Documentation](https://nodemon.io/)
- [Image Thumbnail](https://www.npmjs.com/package/image-thumbnail)
- [Mime-Types](https://www.npmjs.com/package/mime-types)

---

## **Testing**
Run tests using **Mocha**:
```bash
npm test
```

---

## **Author**
Fred Baafi - [fjbaafi18@gmail.com] This project was built as part of the **ALX Software Engineering Program**. For any questions, feel free to reach out.
