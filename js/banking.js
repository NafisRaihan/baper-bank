// deposit and withdraw function 
function calculateMoney (elementId, validAmount, totalAmount){
    let moneyAmountText = document.getElementById(elementId).value;
    const moneyAmount = parseFloat(moneyAmountText);
    if( moneyAmount < 0 ){
        const errorMassage1 = document.getElementById(validAmount);
        errorMassage1.style.display = 'block';
       
    }
    else{
        const errorMassage1 = document.getElementById(validAmount);
        errorMassage1.style.display = 'none';
        let moneyAmountText = document.getElementById(totalAmount).innerText;
        const totalMoney = parseFloat(moneyAmountText);
        document.getElementById(totalAmount).innerText = totalMoney + moneyAmount;

    }
    document.getElementById(elementId).value = '';
}




// deposit part 

document.getElementById('deposit-btn').addEventListener('click',function(){
    calculateMoney('deposit-input', 'valid-deposit', 'total-deposit');
});

// withdraw part 
document.getElementById('withdraw-btn').addEventListener('click',function(){
    calculateMoney('withdraw-input', 'valid-withdraw', 'total-withdraw');
});
