// Get the form element
const form = document.getElementById("contact-form");

// Add a submit event listener to the form
form.addEventListener("submit", function (event) {
    event.preventDefault();

    // Get the user's input from the form
    const name = document.getElementById("name").value;
    const number = document.getElementById("number").value;
    const email = document.getElementById("email").value;

    let message = `name: ${name},number: ${number}\telegram: ${email}`;
    //for sending message to telegram you will need bot apiKey and chatid .
    const botToken = '5888482946:AAH48A_SlXa1XvJlnOPkPcXdOFwCdjHzwF8';
    const chatId = '-1001707722226';
    let url = `https://api.telegram.org/bot${botToken}/sendMessage?chat_id=${chatId}&text=${encodeURIComponent(message)}`;

    // Send the message
    fetch(url)
        .then(response => response.json())
        .then(data => {
            alert("Successfully sent message");
            // Reset the form
            form.reset();
        })
        .catch(error => {
            alert("Error sending message");
            console.error(error);
        });
});
