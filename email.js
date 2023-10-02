function saveEmailForm() {

    var emailform = {
        email: document.getElementById('email').value

    }
    console.log(JSON.stringify(emailform));

    if (emailform != null) {
        alert("Email send successfully!")
    }

    let headers = new Headers();
    headers.append('Content-Type', 'application/json');
    headers.append('Accept', 'application/json');


    fetch("http://localhost:8080/email-send", {
        method: 'POST',
        body: JSON.stringify(emailform),
        headers: headers,
    })

        .then(response => response.json())
        .then(json => console.log(json))
        .catch(error => console.error('Error:', error));
}




// ********************************************************************************






// function saveEmailForm() {
//     var email = document.getElementById('email').value;

//     // Basic email validation
//     if (!isValidEmail(email)) {
//         alert("Please enter a valid email address");
//         return;
//     }

//     var emailForm = {
//         email: email
//     };

//     console.log(JSON.stringify(emailForm));

//     let headers = new Headers();
//     headers.append('Content-Type', 'application/json');
//     headers.append('Accept', 'application/json');

//     fetch("http://localhost:8080/email-send", {
//         method: 'POST',
//         body: JSON.stringify(emailForm),
//         headers: headers,
//     })
//         .then(response => response.json())
//         .then(json => console.log(json))
//         .catch(error => console.error('Error:', error));
// }

// function isValidEmail(email) {
//     // Basic email validation regex
//     var emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
//     return emailRegex.test(email);
// }

