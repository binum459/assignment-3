function validation() {
    var email = document.getElementById("email").value;
    var emailid = document.getElementById("emailid").value;
    var mob = document.getElementById("mob").value;
   
	var password = document.getElementById("exampleInputPassword1").value;

    var regemail = /^([A-Za-z0-9\.-]+)@([A-Za-z0-9\-]+).([a-z]{2,3})(.[a-z]{2,3})?$/;
    let regpwd = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,10}$/;
    var regmob = /^\(?([0-9]{3})\)?[-. ]?([0-9]{3})[-. ]?([0-9]{4})$/;

    
    if (regemail.test(email)) {
        document.getElementById('emailerr').innerHTML = "";
        
    } else {
        document.getElementById('emailerr').innerHTML = "** email is invalid";
        return false;
	}
	
	if (regemail.test(emailid)) {
        document.getElementById('emailiderr').innerHTML = "";
    
    } else {
        document.getElementById('emailiderr').innerHTML = "** email is invalid";
        return false;
    }


    if (email.match(emailid)) {
        document.getElementById('emailiderr').innerHTML = "";
        
    } else {
        document.getElementById('emailiderr').innerHTML = "** email is not a match";
        return false;
    }


    if (regmob.test(mob)) {
        document.getElementById('moberr').innerHTML = "";
        
    } else {
        document.getElementById('moberr').innerHTML = "** Mobile Number is invalid";
        return false;
    }


 
    if (regpwd.test(password)) {
        document.getElementById('exampleInputPassword1err').innerHTML = "";

    } else {
        document.getElementById('exampleInputPassword1err').innerHTML = "** password is invalid";
        return false;
    }

}
