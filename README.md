# Project 2: The Nervous System (Backend API)

## 📌 Overview
Welcome to Project 2 of the DecodeLabs Full Stack Development Industrial Training. If Project 1 was the "Skin," this phase is the "Life"—the nervous system of the application.

This project is a standalone RESTful API built to handle application logic, user input, and server-side responses. It focuses entirely on architectural integrity, secure data flow, and the "Gatekeeper Rule" to ensure reliable communication between the client and server.

## ✨ Key Architectural Principles
* The Gatekeeper Rule: "Never Trust the Client." All incoming data undergoes strict multi-layered validation.
    * Syntactic Validation: Ensures the JSON payload matches the expected schema.
    * Semantic Validation: Ensures the business logic is valid (e.g., preventing duplicate emails).
* Idempotent & Safe Operations: Utilizing standard HTTP methods (`GET`, `POST`) correctly aligned with RESTful noun-based endpoint naming conventions.
* Autonomic Defense: The system gracefully intercepts malformed payloads (pathogens) and responds with precise HTTP status codes (`400 Bad Request`, `500 Internal Error`) without crashing.
* In-Memory Statelessness: Data is managed via an active application array, mastering endpoint logic before scaling to complex persistent databases.

## 🛠️ Technology Stack
* Environment: Node.js
* Framework: Express.js (API Gateway / Brain Stem)
* Data Exchange: Lightweight JSON

## 📡 API Endpoints

### 1. Retrieve Users
* URL: `/users`
* Method: `GET`
* Description: Retrieves the current array of validated users.
* Success Response: `200 OK`

### 2. Create User
* URL: `/users`
* Method: `POST`
* Description: Creates a new user profile.
* Headers: `Content-Type: application/json`
* Request Body Example:
    ```json
    {
      "name": "Alex Mercer",
      "email": "alex.mercer@decodelabs.tech",
      "role": "Full-Stack Intern"
    }
    ```
* Success Response: `201 Created`
* Error Responses: `400 Bad Request` (Validation Failure), `500 Internal Error`

## 🚀 Getting Started

### Prerequisites
* [Node.js](https://nodejs.org/) installed on your machine.

### Installation & Execution
1.  Clone the repository.
2.  Navigate to the project directory in your terminal.
3.  Install dependencies:
    ```bash
    npm install
    ```
4.  Ignite the API Gateway:
    ```bash
    node server.js
    ```
5.  The server will begin listening on `http://localhost:3000`. Test the endpoints using Postman, Thunder Client, or the REST Client extension.

---
Developed by Faizan Nawaz for DecodeLabs Batch 2026.
