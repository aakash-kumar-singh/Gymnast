<?php require 'db_connection.php';?>
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Successfully Registered!</title>
  <link rel="stylesheet" href="styles.css">
</head>
<style>

body {
  font-family: Arial, sans-serif;
  margin: 0;
  padding: 0;
  background-color: teal;
}

.container {
  display: flex;
  align-items: center;
  justify-content: center;
  min-height: 100vh;
}

.card {
  max-width: 360px;
  background-color: #ffffff;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  border-radius: 8px;
  padding: 40px;
  text-align: center;
}

.icon {
  background-color: #16a34a;
  color: #ffffff;
  width: 48px;
  height: 48px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0 auto 20px;
}

h2 {
  font-size: 24px;
  font-weight: bold;
  margin-bottom: 16px;
  color: #008080;
}

p {
  font-size: 16px;
  color: #6b7280;
  margin-bottom: 24px;
}

.button {
  display: inline-block;
  padding: 12px 24px;
  background-color: #008080;
  color: #ffffff;
  text-decoration: none;
  border-radius: 4px;
  transition: background-color 0.3s;
}

.button:hover {
  background-color: #006666;
}




</style>
<body>
  <div class="container">
    <div class="card">
      <div class="icon">
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
          <polyline points="20 6 9 17 4 12" />
        </svg>
      </div>
      <h2>Successfully Registered!</h2>
      <p>Congratulations, your account has been created. Click the button below to login and get started.</p>
      <a class="button" href="login.php">Go to Login</a>
    </div>
  </div>
</body>
</html>
