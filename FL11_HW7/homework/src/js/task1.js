let userEmail = prompt('Please enter your email');
let minPass = 5;
let minEmail = 6;

if (userEmail === '' || userEmail === null) {
  alert('Canceled')
} else if (userEmail === 'user@gmail.com' || userEmail === 'admin@gmail.com') {
    let userPassword = prompt('Please enter your password!')
    
    if (userPassword === '' || userPassword === null) {
      alert('Canceld!')
    } else if (userEmail === 'user@gmail.com' && userPassword === 'UserPass' || 
              userEmail === 'admin@gmail.com' && userPassword === 'AdminPass') {
      let confirmChange = confirm('Do you want to change password?')

      if (confirmChange === true) {
        let oldPassword = prompt('Please enter old password');
        if (userEmail === 'user@gmail.com' && oldPassword === 'UserPass' || 
            userEmail === 'admin@gmail.com' && oldPassword === 'AdminPass') {
          let newPass = prompt('Enter new password!');

        if (newPass.length > minPass) {
          let confirmPass = prompt('Enter new password again')

          if (newPass === confirmPass) {
            alert('You have successfully changed your password.')
          } else {
            alert('You wrote the wrong password.')
          }
        } else {
          alert('It’s too short password. Sorry.')
        }
      } else {
        alert('Old password is wrong!')
      }
    } else {
      alert('You have failed the change.')
    }
  } else {
    alert('Wrong Password!')
  }
} else if (userEmail.length < minEmail) {
    alert('I dont know any emails having name length less than 6 symbols')
} else {
    alert('I dont know you!')
}