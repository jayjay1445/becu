function validateform(){
    const userID =document.getElementById('userID').value;
    const password =document.getElementById('password').value;

    if(userID=='' || userID==null){
    alert('Enter userID');
    return false
    }

    if(password.length<=6){
    alert('Password incorrect!');
    return false
    }
}