//diposit codeing

document.getElementById('diposit-submite-button').addEventListener('click', function(){
    const userEmail = document.getElementById('diposit-input');
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

});


// withdraw codeing

document.getElementById('withdraw-submite-button').addEventListener('click', function(){
    const withdrawInput = document.getElementById('withdraw-input')
    const withdrawInputFiled = withdrawInput.value;
    const withdrawInputAmount = parseFloat(withdrawInputFiled);

    const withdrawBlance = document.getElementById('withdraw-blance');
    const withdrawBlanceFiled = withdrawBlance.innerText;
    const withdrawBlanceAmound = parseFloat(withdrawBlanceFiled);

    const newwithdrawBlance = withdrawBlanceAmound + withdrawInputAmount;
    withdrawBlance.innerText = newwithdrawBlance;

})




