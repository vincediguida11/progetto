var myModal = document.getElementById('myModal')
var myInput = document.getElementById('myInput')

myModal.addEventListener('shown.bs.modal', function () {
  myInput.focus()
})

/* Registrazione */

let registeredUsers = [];

function register() {
  let email = $('#registerEmail').val();
  let password = $('#registerPassword').val();
  let passwordCheck = $('#registerCheckPassword').val();

  if(password == ""){

    toastr.error('La password non può essere vuota','errore');
    return false;
  }
  if(!checkPassword(password, passwordCheck)) {

    toastr.error('Le due password non coincidono','errore');
    return false;
  }
  if(email == ""){

    toastr.error('L\'email non può essere vuota','errore');
    return false; 
  }

  let user = {
    email : email,
    password : password
  }
  registeredUsers.push(registeredUsers)


}
function checkPassword (password1, password2) {
  let isEqual = false;
  if(password1 === password2){
    isEqual = true;
  }
  return isEqual;
}

function checkIfExists(email){
  let exists = false;
  $.each(registeredUsers, function(){
    if(registeredUsers.email === email){
      exists = true;
    }
  })
  return exists;
}

$('#registerButton').click(function(){
  register();
});
/*Fine Registrazione */