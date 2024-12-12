<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Login - Hacker's Path</title>
    <style>
        body {
            font-family: Arial, sans-serif;
            background: linear-gradient(to right, #00c6ff, #0072ff);
            color: white;
            text-align: center;
            padding: 20px;
        }
        .login-container {
            margin: 100px auto;
            padding: 20px;
            background-color: white;
            color: black;
            border-radius: 10px;
            box-shadow: 0 4px 10px rgba(0, 0, 0, 0.2);
            max-width: 400px;
        }
        input {
            width: 90%;
            padding: 10px;
            margin: 10px 0;
            border: 1px solid #ccc;
            border-radius: 5px;
        }
        button {
            padding: 10px 20px;
            background-color: #0072ff;
            color: white;
            border: none;
            border-radius: 5px;
            cursor: pointer;
        }
        button:hover {
            background-color: #0056b3;
        }
        p#error {
            color: red;
        }
    </style>
</head>
<body>
    <h1>Welcome to Hacker's Path</h1>
    <div class="login-container">
        <h2>Login</h2>
        <input type="text" id="username" placeholder="Enter your username" required>
        <br>
        <button onclick="login()">Login</button>
        <p id="error"></p>
    </div>
    <script src="js/auth.js"></script>
</body>
</html>
