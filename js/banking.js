//banking page js

document.getElementById('diposit-submite-button').addEventListener('click', function(){
    const userEmailPlace = document.getElementById('user-email');
    const userEmailInput = userEmailPlace.value;
    // console.log(userEmailInput);
    const dipositBalance = document.getElementById('diposit-blance');
    const dipositBalanceAmound = dipositBalance.innerText;
    const dipositBalanceAmoundTotal = dipositBalanceAmound + userEmailInput;
    dipositBalanceAmoundTotal.innerText = dipositBalance;

    userEmailPlace.value = '';
    
})