
function sendEmail() {
    Email.send({
        SecureToken: "97b11a19-51b5-4630-b099-62ce763596f5",
        To: 'pharmacywrites@gmail.com',
        From: 'pharmacywrites@gmail.com',
        Subject: document.getElementById('email').value,
        Body: document.getElementById('message').value

    }).then(
        alert('Thank You! Your Mail has been received we will contact you shortly')
    );
}