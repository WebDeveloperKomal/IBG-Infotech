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