<?php
session_start();
require 'db_connection.php';

if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $username = $_POST['username'];
    $password = $_POST['password'];

    // Prepare and execute the query to fetch user
    $stmt = $conn->prepare("SELECT * FROM signup WHERE username = ?");
    $stmt->bind_param("s", $username);
    $stmt->execute();
    $result = $stmt->get_result();

    if ($result->num_rows === 1) {
        $user = $result->fetch_assoc();

        // Verify the password
        if (password_verify($password, $user['password'])) {
            // Set session variables if login is successful
            $_SESSION['loggedin'] = true;
            $_SESSION['username'] = $username;
            $_SESSION['user_id'] = $user['id'];

            // Redirect to welcome page
            header("Location: index.html");
            exit;
        } else {
            header("Location: login2.php");
        }
    } else {
        header("Location: login2.php");
    }

    $stmt->close();
    $conn->close();
}
?>


<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Sign in to your account</title>
    <style>
        body, html {
            margin: 0;
            padding: 0;
            font-family: Arial, sans-serif;
            background-color: #0f172a;
            color: #ffffff;
            height: 100%;
            display: flex;
            justify-content: center;
            align-items: center;
        }
        .container {
            background-color: #1e293b;
            padding: 2rem;
            border-radius: 0.5rem;
            width: 100%;
            max-width: 400px;
        }
        h1 {
            text-align: center;
            font-size: 1.5rem;
            margin-bottom: 1.5rem;
        }
        .form-group {
            margin-bottom: 1rem;
        }
        label {
            display: block;
            margin-bottom: 0.5rem;
            font-size: 0.875rem;
            color: #e2e8f0;
        }
        input {
            width: 100%;
            padding: 0.50rem;
            background-color: #2d3a4f;
            border: none;
            border-radius: 0.25rem;
            color: #ffffff;
            font-size: 1rem;
        }
        input::placeholder {
            color: #94a3b8;
        }
        .forgot-password {
            text-align: right;
            margin-bottom: 1rem;
        }
        .forgot-password a {
            color: #ef4444;
            text-decoration: none;
            font-size: 0.875rem;
        }
        .forgot-password a:hover {
            text-decoration: underline;
        }
        .btn {
            display: block;
            width: 100%;
            padding: 0.75rem;
            background-color: #ef4444;
            color: #ffffff;
            border: none;
            border-radius: 0.25rem;
            font-size: 1rem;
            cursor: pointer;
            transition: background-color 0.3s ease;
        }
        .btn:hover {
            background-color: #dc2626;
        }
        .divider {
            text-align: center;
            margin: 1rem 0;
            color: #94a3b8;
            font-size: 0.875rem;
        }
        .signup-link {
            text-align: center;
            margin-top: 1rem;
            font-size: 0.875rem;
            color: #94a3b8;
        }
        .signup-link a {
            color: #ef4444;
            text-decoration: none;
        }
        .signup-link a:hover {
            text-decoration: underline;
        }
    </style>
</head>
<body>
    <div class="container">
        <h1>Sign in to your account</h1>
        <form action="login.php" method="POST">
            <div class="form-group">
                <label for="username">Username:</label>
                <input type="text" id="username" name="username" required>
            </div>
            <div class="form-group">
                <label for="password">Password:</label>
                <input type="password" id="password" name="password" required>
            </div>
            <div class="forgot-password">
                <a href="#">Forgot password?</a>
            </div>
            <input type="submit" value="Log In" class="btn">
        </form>
        <div class="divider">OR</div>
        <button class="btn">Login Using Phone</button>
        <div class="signup-link">
            Don't have an account yet? <a href="signup.php">Sign up</a>
        </div>
    </div>
</body>
</html>