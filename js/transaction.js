// const withdrawField = document.getElementById('withdraw-input');
// const withdrawAmount = withdrawField.value;

// =====================> Bank Transaction <===========================

// deposit balance
document.getElementById('deposit-btn').addEventListener('click', function() {
    // get the amount deposited
    const depositField = document.getElementById('deposit-input');
    if (depositField.value == '') {
        alert("Please add your deposit amount!!")
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
    } else {
        const withdrawAmount = parseFloat(withdrawField.value)
        const withdrawBalance = document.getElementById('withdraw');
        const currentWithdrawBalance = parseFloat(withdrawBalance.innerText);
        withdrawBalance.innerText = currentWithdrawBalance + withdrawAmount;

        // Update main balance
        const mainBalance = document.getElementById('balance');
        const currentAmount = parseFloat(mainBalance.innerText);
        mainBalance.innerText = currentAmount - withdrawAmount;

        withdrawField.value = '';
    }
})