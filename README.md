# Mrimperfect7.github.io
<!DOCTYPE html>
<html>
<head>
    <title>Registration</title>
</head>
<body>
    <h1>Registration</h1>
    <form id="registration-form">
        <input type="text" id="name" placeholder="Full Name" required>
        <input type="email" id="email" placeholder="Email" required>
        <input type="password" id="password" placeholder="Password" required>
        <button type="submit">Register</button>
    </form>

    <!-- Include Firebase SDK -->
    <script src="https://www.gstatic.com/firebasejs/9.3.0/firebase-app.js"></script>
    <script src="https://www.gstatic.com/firebasejs/9.3.0/firebase-auth.js"></script>
    <script src="https://www.gstatic.com/firebasejs/9.3.0/firebase-database.js"></script>
    <script src="firebase-config.js"></script>
    <script src="registration.js"></script>
</body>
</html>
