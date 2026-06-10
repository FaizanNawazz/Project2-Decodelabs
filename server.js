const express = require("express");
const app = express();

// Middleware to parse incoming JSON
app.use(express.json());

// In-memory storage
const users = [];

/*
 GET /users 
*/
app.get("/users", (req, res) => {
  // 200 Success: Return the current state of the organism
  res.status(200).json({
    message: "Users retrieved successfully.",
    data: users,
  });
});

/*
  POST /users 
*/
app.post("/users", (req, res) => {
  const { name, email, role } = req.body;

  // 🛡️ LAYER 1:
  if (!name || !email || !role) {
    // 400 Bad Request: Malformed data or missing fields[cite: 2]
    return res.status(400).json({
      error: "Bad Request",
      message:
        "Syntactic Validation Failed: 'name', 'email', and 'role' are required.",
    });
  }

  // 🛡️ LAYER 2: Semantic Validation (Is the logic valid?)[cite: 2]
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailRegex.test(email)) {
    return res.status(400).json({
      error: "Bad Request",
      message: "Semantic Validation Failed: Invalid email format.",
    });
  }

  const userExists = users.some((u) => u.email === email);
  if (userExists) {
    return res.status(400).json({
      error: "Bad Request",
      message:
        "Semantic Validation Failed: A user with this email already exists.",
    });
  }

  try {
    // Create the valid user
    const newUser = {
      id: users.length + 1,
      name,
      email,
      role,
    };

    users.push(newUser);

    // 201 Created: The resource was successfully generated[cite: 2]
    res.status(201).json({
      message: "User created successfully.",
      data: newUser,
    });
  } catch (error) {
    // 500 Internal Error: Catching unexpected server failure[cite: 2]
    res.status(500).json({
      error: "Internal Error",
      message:
        "The server encountered a critical failure while processing the request.",
    });
  }
});

// Start the API Server
const PORT = 3000;
app.listen(PORT, () => {
  console.log(`🧠 API Gateway is actively listening on port ${PORT}...`);
});
