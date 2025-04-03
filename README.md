# Online Voting System

This is a full-stack **Online Voting System** built using **React.js** for the frontend and **Spring Boot** for the backend, with **H2 Database** as the data store. This project was developed as part of the **Cognizant Internship Program**.

## Features

- User authentication and authorization (Admin & Voter roles)
- Secure voting mechanism
- Real-time vote count updates
- Candidate registration and management (Admin)
- Responsive user interface
- Temporary in-memory storage using H2 database

## Tech Stack

### Frontend:
- React.js
- React Router

### Backend:
- Spring Boot (Java)
- Spring Data JPA (for database interaction)
- H2 Database (for in-memory storage)

## Setup Instructions

### Prerequisites
- Java 17+
- Node.js & npm
- Maven

### Backend Setup
1. Clone the repository:
   ```sh
   git clone https://github.com/yourusername/online-voting-system.git
   cd online-voting-system/backend
   ```
2. Build and run the Spring Boot application:
   ```sh
   mvn spring-boot:run
   ```
3. Access the API at `http://localhost:8080`

### Frontend Setup
1. Navigate to the frontend directory:
   ```sh
   cd ../frontend
   ```
2. Install dependencies:
   ```sh
   npm install
   ```
3. Start the React application:
   ```sh
   npm start
   ```
4. Open the browser and visit `http://localhost:3000`

## API Endpoints
| Method | Endpoint | Description |
|--------|-------------|-------------|
| GET | `/api/candidates` | Get all candidates |
| POST | `/api/vote` | Submit a vote |
| GET | `/api/results` | Get voting results |

## Database Configuration
The project uses an **H2 in-memory database**. You can access the H2 Console at:
```
http://localhost:8080/h2-console
```


