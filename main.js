// Initialize Firebase with your Firebase project configuration
const firebaseConfig = {
  apiKey: "AIzaSyBvcyjJPrNSkoiI68g8J9mxvH3NX10p2HA",
  authDomain: "pypro-2ebfb.firebaseapp.com",
  databaseURL: "https://pypro-2ebfb-default-rtdb.firebaseio.com",
  projectId: "pypro-2ebfb",
  storageBucket: "pypro-2ebfb.appspot.com",
  messagingSenderId: "555786381036",
  appId: "1:555786381036:web:8d4800e7d972bc01fc67c9",
  measurementId: "G-JFTSNFGCWP"
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
