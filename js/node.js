// document.getElementById('submite-button').addEventListener('click', function(){
//     const  userEmail = document.getElementById('user-email');
//     const userEmailFiled = userEmail.value;
//     console.log(userEmailFiled);
//     const userpasswordFild = document.getElementById('user-password');
//     const userPassword = userpasswordFild.value;
//     console.log(user password cliecd); 
// })



document.getElementById('submite-button').addEventListener('click', function(){
    const userEmailFiled = document.getElementById('user-email');
    const userEmail = userEmailFiled.value;
    // console.log(userEmail);

    //userpassword
    const userpasswordFild = document.getElementById('user-password');
    const userPassword = userpasswordFild.value;
    // console.log(userPassword);

    if( userEmail == 'faysalahmmed@gmail.com' && userPassword == 'faysalmallik'){
        Window.location.href = 'banking.html';
    }
    
})