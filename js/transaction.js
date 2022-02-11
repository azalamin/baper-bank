// =====================> Bank Transaction <===========================
// deposit balance
document.getElementById('deposit-btn').addEventListener('click', function() {
    // get the amount deposited
    const depositField = document.getElementById('deposit-input');
    if (depositField.value == '') {
        alert("Please add your deposit amount!!")
    } else if (depositField.value < 0) {
        alert("Deposit amount cannot be negative!")
    } else {
        const depositAmount = parseFloat(depositField.value);
        const depositBalance = document.getElementById('deposit');
        const currentAmount = parseFloat(depositBalance.innerText);
        depositBalance.innerHTML = currentAmount + depositAmount;
        // Update main balance
        const mainBalance = document.getElementById('balance');
        const mainAmount = parseFloat(mainBalance.innerText);
        mainBalance.innerText = mainAmount + depositAmount;

        depositField.value = '';
    }
});

// withdraw balance
document.getElementById('withdraw-btn').addEventListener('click', function() {
    const withdrawField = document.getElementById('withdraw-input');
    if (withdrawField.value == '') {
        alert("Please add your withdraw amount!!")
    } else if (withdrawField.value < 0) {
        alert("Withdraw amount cannot be negative!")
    } else {
        const withdrawAmount = parseFloat(withdrawField.value)
        const withdrawBalance = document.getElementById('withdraw');
        const currentWithdrawBalance = parseFloat(withdrawBalance.innerText);
        // Update main balance
        const mainBalance = document.getElementById('balance');
        const currentAmount = parseFloat(mainBalance.innerText);
        console.log(currentAmount)
        const newBalance = currentAmount - withdrawAmount;
        if (newBalance < 0) {
            alert("You do not have sufficient balance!!")
        } else {
            mainBalance.innerText = newBalance;
            withdrawBalance.innerText = currentWithdrawBalance + withdrawAmount;
        }

        withdrawField.value = '';
    }
});