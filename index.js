function saveContactForm() {

    var contactform = {
        fullName: document.getElementById('fullName').value,
        email: document.getElementById('email').value,
        phoneNumber: document.getElementById('phoneNumber').value,
        company: document.getElementById('company').value,
        message: document.getElementById('message').value
    }

    console.log(JSON.stringify(contactform));

    if (contactform != null) {
        alert("message sent successfully!")
    }

    let headers = new Headers();
    headers.append('Content-Type', 'application/json');
    headers.append('Accept', 'application/json');


    fetch("http://localhost:8080/save-form", {
        method: 'POST',
        body: JSON.stringify(contactform),
        headers: headers,
    })

        .then(response => response.json())
        .then(json => console.log(json))
        .catch(error => console.error('Error:', error));


}






// function saveContactForm() {
//     var fullName = document.getElementById('fullName').value;
//     var email = document.getElementById('email').value;
//     var phoneNumber = document.getElementById('phoneNumber').value;
//     var company = document.getElementById('company').value;
//     var message = document.getElementById('message').value;

//     // Validate the form fields
//     if (!validateFullName(fullName)) {
//         alert("Please enter a valid full name.");
//         return;
//     }

//     if (!validateEmail(email)) {
//         alert("Please enter a valid email address.");
//         return;
//     }

//     if (!validatePhoneNumber(phoneNumber)) {
//         alert("Please enter a valid phone number.");
//         return;
//     }

//     if (!validateCompany(company)) {
//         alert("Please enter a valid company name.");
//         return;
//     }

//     if (!validateMessage(message)) {
//         alert("Please enter a valid message.");
//         return;
//     }

//     var contactform = {
//         fullName: fullName,
//         email: email,
//         phoneNumber: phoneNumber,
//         company: company,
//         message: message
//     };

//     console.log(JSON.stringify(contactform));

//     let headers = new Headers();
//     headers.append('Content-Type', 'application/json');
//     headers.append('Accept', 'application/json');

//     fetch("http://localhost:8080/save-form", {
//         method: 'POST',
//         body: JSON.stringify(contactform),
//         headers: headers,
//     })
//         .then(response => response.json())
//         .then(json => {
//             console.log(json); // Handle success
//             alert("Message sent successfully!");
//         })
//         .catch(error => {
//             console.error('Error:', error); // Handle error
//             alert("An error occurred while sending the message.");
//         });
// }
