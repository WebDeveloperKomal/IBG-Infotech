function saveContactUsForm() {

    var contactUsForm = {
        name: document.getElementById("name").value,
        email: document.getElementById("email").value,
        phoneNumber: document.getElementById("phoneNumber").value,
        services: document.getElementById("services").value,
        message: document.getElementById("message").value,
    }

    console.log(JSON.stringify(contactUsForm));

    if (contactUsForm != null) {
        alert("Send mesage successfully!")
    }

    let headers = new Headers();
    headers.append('Content-Type', 'application/json');
    headers.append('Accept', 'application/json');


    fetch("http://localhost:8080/contact-us", {
        method: 'POST',
        body: JSON.stringify(contactUsForm),
        headers: headers,
    })

        .then(response => response.json())
        .then(json => console.log(json))
        .catch(error => console.error('Error:', error));

}

// ************************************************************************




