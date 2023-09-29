const resetPassword = document.getElementById('resetPassword');
const mailField = document.getElementById("mail");

const auth = firebase.auth();

const resetPasswordFuntion = () => {
    const email = mailField.value;

    auth.sendPasswordResetEmail(email)
        .then(() => {
            console.log('Passsword Reset Email Sent Successfully!');
        })
        .catch(error => {
            console.error(error);

        }) 
}


resetPassword.addEventListener("click", resetPasswordFuntion);



// ************************************************************************




// document.getElementById("resetPassword").addEventListener("click", function () {
//     const newPassword = document.getElementById("newPassword").value;
//     const confirmPassword = document.getElementById("confirmPassword").value;

//     if (newPassword === confirmPassword) {
//         document.getElementById("resetResult").innerText = "Password reset successful!";
//     } else {
//         document.getElementById("resetResult").innerText = "Passwords do not match!";
//     }
// });
