document.getElementById('submit-btn').addEventListener('click', function(){
    const mailAdress = document.getElementById('mail-input').value;
    const passGiven = document.getElementById('pass-input').value;
    if( mailAdress == 'sontan@baap.com' && passGiven == 'secret'){
        window.location.href = 'banking.html';
    }
});