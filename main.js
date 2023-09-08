// Initialize Firebase with your Firebase project configuration
const firebaseConfig = {
    apiKey: "YOUR_API_KEY",
    authDomain: "YOUR_AUTH_DOMAIN",
    projectId: "YOUR_PROJECT_ID",
    storageBucket: "YOUR_STORAGE_BUCKET",
    messagingSenderId: "YOUR_MESSAGING_SENDER_ID",
    appId: "YOUR_APP_ID"
};

firebase.initializeApp(firebaseConfig);

const auth = firebase.auth();
const database = firebase.database();

// Function to send OTP to the provided phone number
function sendOTP() {
    const phoneNumber = document.getElementById("phoneNumber").value;
    const appVerifier = new firebase.auth.RecaptchaVerifier('recaptcha-container');
    
    auth.signInWithPhoneNumber(phoneNumber, appVerifier)
        .then((confirmationResult) => {
            const verificationCode = prompt('Enter the OTP sent to your phone:');
            return confirmationResult.confirm(verificationCode);
        })
        .then((result) => {
            // OTP verification successful
        })
        .catch((error) => {
            console.error(error);
        });
}

// Function to register the user and store data in Firebase database
function registerUser() {
    // Retrieve user data, validate, and store in the database
    // Example: const userData = { name: "John", email: "john@example.com" };
    // database.ref('users').push(userData);
}

document.getElementById("sendOTP").addEventListener("click", sendOTP);
document.getElementById("register").addEventListener("click", registerUser);
