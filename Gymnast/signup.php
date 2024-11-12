<?php
require 'db_connection.php';

if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $email = $_POST['email'];
    $contact = $_POST['contact'];
    $username = $_POST['username'];
    $password = $_POST['password'];

    // Check if any field is empty
    if (empty($email) || empty($contact) || empty($username) || empty($password)) {
        echo "All fields are required.";
        exit;
    }

    // Hash the password before saving
    $hashedPassword = password_hash($password, PASSWORD_DEFAULT);

    // Insert the new user into the database
    $stmt = $conn->prepare("INSERT INTO signup (email, contact, username, password) VALUES (?, ?, ?, ?)");
    $stmt->bind_param("ssss", $email, $contact, $username, $hashedPassword);

    if ($stmt->execute()) {
        header("Location: logingateway.php");
    } else {
        echo "Error: Could not register user. Email or username might already exist.";
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
    <title>Create an account</title>
    <style>
        * {
            margin: 0;
            padding: 0;
            box-sizing: border-box;
            font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif;
        }

        body {
            min-height: 100vh;
            background-color: #0f172a;
            display: flex;
            align-items: center;
            justify-content: center;
            padding: 1rem;
        }

        .container {
            width: 100%;
            max-width: 420px;
            background-color: #1e293b;
            border-radius: 0.75rem;
            padding: 2rem;
        }

        h1 {
            color: #ffffff;
            font-size: 1.5rem;
            font-weight: 600;
            margin-bottom: 1.5rem;
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

        .form-group {
            margin-bottom: 1.25rem;
        }

        label {
            display: block;
            color: #ffffff;
            font-size: 0.875rem;
            margin-bottom: 0.5rem;
        }

        input {
            width: 100%;
            padding: 0.75rem 1rem;
            background-color: #2d3a4f;
            border: none;
            border-radius: 0.375rem;
            color: #ffffff;
            font-size: 0.875rem;
        }

        input::placeholder {
            color: #64748b;
        }

        input:focus {
            outline: none;
            box-shadow: 0 0 0 2px rgba(255, 255, 255, 0.1);
        }

        .submit-btn {
            width: 100%;
            padding: 0.75rem;
            background-color: #ef4444;
            color: #ffffff;
            border: none;
            border-radius: 0.375rem;
            font-size: 0.875rem;
            font-weight: 500;
            cursor: pointer;
            margin-top: 0.5rem;
            transition: background-color 0.2s ease;
        }

        .submit-btn:hover {
            background-color: #dc2626;
        }

        .login-link {
            text-align: center;
            margin-top: 1rem;
            color: #94a3b8;
            font-size: 0.875rem;
        }

        .login-link a {
            color: #ef4444;
            text-decoration: none;
            margin-left: 0.25rem;
        }

        .login-link a:hover {
            text-decoration: underline;
        }
    </style>
</head>
<body>
    <div class="container">
        <h1>Create an account</h1>
        <form action="signup.php" method="post">
            <div class="form-group">
                <label for="email">Email</label>
                <input type="text" name="email" placeholder="Your Email" required>
            </div>
            <div class="form-group">
                <label for="contact">Phone number:</label>
                <input type="text" name="contact" placeholder="123-456-7890" required>
            </div>
            <div class="form-group">
                <label for="username">Username</label>
                <input type="text" id="username" name="username" required>
            </div>
            <div class="form-group">
            <label for="password">Password:</label>
            <input type="password" id="password" name="password" required>
            </div>
            <input type="submit" value="SignUp" class="btn">
        </form>
        <div class="login-link">
            Already have an account? <a href="login.php">Login here</a>
        </div>
    </div>
</body>
</html>