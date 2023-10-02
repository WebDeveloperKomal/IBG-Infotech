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

// ******************************************************************************************
