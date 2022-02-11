// Login Form 
document.getElementById('submit').addEventListener('click', function() {
    const userEmailField = document.getElementById('user-email');
    const userPasswordField = document.getElementById('user-password');
    const userEmail = userEmailField.value;
    const userPassword = userPasswordField.value;

    if (userEmail == "baper@bank.com" && userPassword == "secret") {
        window.location.href = '../transaction.html';
        // window.open(
        //     '../transaction.html', '_blank' // <- This is what makes it open in a new window.
        // );
    }
});