## Overview
This project provides a simple API with the following features:
1. **Register User**: Allows users to register using an email (as `username`) and a password.
2. **List Rides**: Retrieves a list of all available rides.
3. **Ride Details**: Fetches detailed information for a specific ride using the ride ID.

---

## Installation

1. Clone the repository:
   ```bash
   git clone <repository-link>
   cd <repository-folder>
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Set up environment variables:
   - Create a `.env` file in the root directory.
   - Add the following variables:
     ```
     MONGO_URI=<your-mongodb-connection-string>
     PORT=3000
     ```

4. Start the server:
   ```bash
   npm start
   ```
   The API will be running on `http://localhost:3000`.

---

## Endpoints

### 1. **Register User**
**POST** `/api/register`

Registers a new user using an email and password.

#### Request Body:
```json
{
    "username": "example@example.com",
    "password": "password123"
}
```

#### Responses:
- **201 Created**:
  ```json
  {
      "message": "User registered successfully"
  }
  ```
- **400 Bad Request** (Invalid Email Format):
  ```json
  {
      "error": "Invalid email format"
  }
  ```
- **400 Bad Request** (Email Already Exists):
  ```json
  {
      "error": "Email already exists"
  }
  ```
- **500 Internal Server Error**:
  ```json
  {
      "error": "An error occurred during registration"
  }
  ```

---

### 2. **List Rides**
**GET** `/api/rides`

Fetches a list of all available rides.

#### Responses:
- **200 OK**:
  ```json
  [
      {
          "rideID": "1",
          "distance": 15.2,
          "fare": 150
      },
      {
          "rideID": "2",
          "distance": 7.5,
          "fare": 75
      }
  ]
  ```
- **500 Internal Server Error**:
  ```json
  {
      "error": "An error occurred while fetching rides"
  }
  ```

---

### 3. **Ride Details**
**GET** `/api/rides/:id`

Fetches detailed information about a specific ride.

#### Path Parameter:
- `id`: The ID of the ride.

#### Responses:
- **200 OK**:
  ```json
  {
      "rideID": "1",
      "distance": 15.2,
      "fare": 150,
      "details": "Ride from Point A to Point B"
  }
  ```
- **404 Not Found**:
  ```json
  {
      "error": "Ride not found"
  }
  ```
- **400 Bad Request**:
  ```json
  {
      "error": "An error occurred"
  }
  ```

---

## Testing

You can test the API endpoints using tools like [Postman](https://www.postman.com/) or [curl](https://curl.se/):

- Example with `curl`:
  ```bash
  curl -X POST http://localhost:3000/api/register -H "Content-Type: application/json" -d '{"username": "testuser@example.com", "password": "password123"}'
  ```

---

## Technologies Used
- **Node.js**
- **Express.js**
- **MongoDB**

---

## Notes
- Ensure MongoDB is running and accessible via the connection string provided in the `.env` file.
- The `username` field is expected to be a valid email address.

---

## License
This project is licensed under the MIT License.

