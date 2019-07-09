function login () {

	let rootUser = prompt('Enter your login');

	this.checkData = function () {

		let date = new Date();
		date.getHours();

		if (date.getHours() < 20 && rootUser === 'Admin') {
			alert('Good day, dear Admin!')
		} else if (date.getHours() > 20 && rootUser === 'Admin') {
			alert('Good evening, dear Admin!')
		} else if (date.getHours() < 20 && rootUser === 'User') {
			alert('Good day, dear User!')
		} else if (date.getHours() > 20 && rootUser === 'User') {
			alert('Good evening, dear User!')
		}
	}

	this.entPass = function () {
		
		let password = prompt('Enter your password');
		if (password === '' || password === null) {
			alert('Canceled');
		} else if (password === 'UserPass' && rootUser === 'User') {
				this.checkData()
			} else if (password === 'RootPass' && rootUser === 'Admin') {
				this.checkData()
			} else {
				alert('wrong password')
			}
	};

	if (rootUser === '' || rootUser === null) {
		alert('Canceled');
	} else if (rootUser === 'User' || rootUser === 'Admin') {
			this.entPass() 
		} else if (rootUser.length >= 4 && rootUser !== 'User') {
				alert("I don't know you ")
		} else {
			alert("I don't know any users having name length less than 4 symbols")
		}       
}

login()
