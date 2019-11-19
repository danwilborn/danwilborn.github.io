import Email from 'email';

function sendEmails(firstName, lastName, email) {
    Email.send({
        SecureToken: 'd78333be-c3dd-4fa2-9b38-74da7c0b47e3',
        To: email,
        From: 'punkyhollow2020@gmail.com',
        Subject: 'Welcome To Team Punky Hollow!',
        Body: 'Hi ' + firstName + ' ' + lastName
    }).then(
        message => alert(message)
    );
}

export default sendEmails;