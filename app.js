
function getInputValue(inputId) {
    const inputFeild = document.getElementById(inputId);
    const inputAmountText = inputFeild.value;
    inputFeild.value = '';
    return inputAmountText;

}

function updatetotalfield(totalFeildId, depositInputText) {
    const depositTotal = document.getElementById(totalFeildId);
    const depositTotalText = depositTotal.innerText;
    depositTotal.innerText = parseFloat(depositTotalText) + parseFloat(depositInputText);
    return depositTotalText;

}

document.getElementById('deposit-button').addEventListener('click', function () {
    // console.log('ghfhghn')
    // const depositInput = document.getElementById('deposit-input');
    // const depositInputText = depositInput.value;
    // console.log(depositInputText)
    const depositInputText = getInputValue('deposit-input');

    //get current deposit
    // const depositTotal = document.getElementById('deposit-total');
    // const depositTotalText = depositTotal.innerText;
    updatetotalfield('deposit-total', depositInputText)
    // console.log(depositTotalText)
    // depositTotal.innerText = parseFloat(depositTotalText) + parseFloat(depositInputText);

    //update baalance2
    // const balanceTotal = document.getElementById('balance-total');
    // const balanceTotalText = balanceTotal.innerText;
    // console.log(balanceTotalText)
    // const previousBalanceTotal = parseFloat(balanceTotalText);
    // balanceTotal.innerText = previousBalanceTotal + parseFloat(depositInputText);

    updatetotalfield('balance-total', depositInputText)


});


document.getElementById('withdraw-button').addEventListener('click', function () {
    // console.log('sfgsdhf')
    // const withdrawInput = document.getElementById('Withdraw-input');
    // const withdrawInputText = withdrawInput.value;
    const withdrawInputText = getInputValue('Withdraw-input')
    // console.log(withdrawInputText)
    const withdrawTotal = document.getElementById('withdraw-total');
    const withdrawTotalText = withdrawTotal.innerText;
    // console.log(withdrawTotalText)
    withdrawTotal.innerText = parseFloat(withdrawInputText) + parseFloat(withdrawTotalText);
    // withdrawInput.value = '';
    //update diposit

    const drawTotal = document.getElementById('balance-total');
    const drawTotalText = drawTotal.innerText;
    const text = parseFloat(drawTotalText);
    drawTotal.innerText = text - parseFloat(withdrawInputText);

})
