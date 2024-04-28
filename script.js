function validEmail(str) {
  //your JS code here.
	let mailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
	if(str.match(mailformat)){
		return true;
	}
	else return false;
}

// Do not change the code below.
const str = prompt("Enter an email address.");
alert(validEmail(str));
