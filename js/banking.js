//banking page js

// document.getElementById('diposit-submite-button').addEventListener('click', function(){
//     const userEmailPlace = document.getElementById('user-email');
//     const userEmailInput = userEmailPlace.value;
//     // console.log(userEmailInput);
//     const dipositBalance = document.getElementById('diposit-blance');
//     const dipositBalanceAmound = dipositBalance.innerText;
//     const dipositBalanceAmoundTotal = dipositBalanceAmound + userEmailInput;
//     dipositBalanceAmoundTotal.innerText = dipositBalance;

//     userEmailPlace.value = '';
    
// })


document.getElementById('diposit-submite-button').addEventListener('click', function(){
    const userEmail = document.getElementById('user-email');
    const userEmailFiled = userEmail.value;
    const userEmailInput = parseFloat(userEmailFiled);
    
    const dipositTotal = document.getElementById('diposit-blance');
    const previousDipositText = dipositTotal.innerText;
    const previousDipositAmount = parseFloat(previousDipositText);
    const newDipositTotal = previousDipositAmount + userEmailInput;
    dipositTotal.innerText = newDipositTotal; 


    const blanceTotal = document.getElementById('blance-total');
    const blanceTotalText = blanceTotal.innerText;
    const previouseBlanceTotal = parseFloat(blanceTotalText);
    const newBlanceTotal = previouseBlanceTotal + userEmailInput;
    blanceTotal.innerText = newBlanceTotal;



    userEmail.value = '';

})