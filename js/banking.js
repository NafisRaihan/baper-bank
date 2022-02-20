// deposit and withdraw function 
function calculateMoney (elementId, validAmount, totalAmount, isAdding){
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
        const balanceText = document.getElementById('total-balance').innerText;
        const balanceAmount = parseFloat(balanceText);
        if(isAdding == true){
            document.getElementById('total-balance').innerText = balanceAmount + moneyAmount;
        }
        else {
            document.getElementById('total-balance').innerText = balanceAmount - moneyAmount;
        }
    }
    document.getElementById(elementId).value = '';
}


// deposit part 

document.getElementById('deposit-btn').addEventListener('click',function(){
    calculateMoney('deposit-input', 'valid-deposit', 'total-deposit', true);
    
});

// withdraw part 
document.getElementById('withdraw-btn').addEventListener('click',function(){
    calculateMoney('withdraw-input', 'valid-withdraw', 'total-withdraw', false);
});
