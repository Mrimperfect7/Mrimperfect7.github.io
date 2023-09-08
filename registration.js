const registrationForm = document.getElementById("registration-form");

registrationForm.addEventListener("submit", function(event) {
    event.preventDefault();

    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;

    // Create a user in Firebase Authentication
    firebase.auth().createUserWithEmailAndPassword(email, password)
        .then((userCredential) => {
            // Save additional user data to Firebase Realtime Database
            const user = userCredential.user;
            const uid = user.uid;
            const userData = {
                name: name,
                email: email
            };

            firebase.database().ref('users/' + uid).set(userData)
                .then(() => {
                    alert("Registration successful!");
                    // Redirect to a success page or perform other actions
                })
                .catch((error) => {
                    console.error("Error writing user data: ", error);
                });
        })
        .catch((error) => {
            console.error("Error creating user: ", error);
        });
});
