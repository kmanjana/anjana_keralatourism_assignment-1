//for name validation
let fname = document.getElementById("fname");
let error1 = document.getElementById("error1") ;

let lname = document.getElementById("lname");
let error2 = document.getElementById("error2") ;

let names =/^([A-Za-z\. ]+)$/;

//for email validation
let email = document.getElementById("email");
let error3 = document.getElementById("error3") ;
let regexp = /^([A-Za-z0-9\.-]+)@([A-Za-z0-9\-]+).([a-z]{2,3})(.[a-z]{2,3}?)$/

//for phone number validation
let phno = document.getElementById("phno");
let error4 = document.getElementById("error4") ;
let phoneno = /^\(?([0-9]{3})\)?[-. ]?([0-9]{3})[-. ]?([0-9]{4})$/;

//for password validation
let pwd = document.getElementById("pwd");
let error6 = document.getElementById("error6") ;
let confpwd = document.getElementById("confpwd");
let error7 = document.getElementById("error7") ;

function validate(){

    if((email.value.trim!=" ") && (phno.value.trim!=" ")){
         if(((regexp.test(email.value))!=1) && ((phoneno.test(phno.value))!=1) ){
            error3.innerHTML="Please enter valid email id";
            email.style.border="1px solid red";
    
            error4.innerHTML="Please enter valid phone number";
            phno.style.border="1px solid red";
            return false;
        }

        else if((regexp.test(email.value)) && (phoneno.test(phno.value))){
            if (((names.test(fname.value))!=1) || ((names.test(lname.value))!=1)){
                if(((names.test(fname.value))!=1)){
                    error1.innerHTML="Please enter valid name";
                    fname.style.border="1px solid red";

                    error2.innerHTML="";
                    lname.style.border="none";
                    return false;
                }
                else if(((names.test(lname.value))!=1)){
                    error2.innerHTML="Please enter valid name";
                    lname.style.border="1px solid red";

                    error1.innerHTML="";
                    fname.style.border="none";
                    return false;
                }
                
            }
            if((pwd.value.length) < 8 ){
                error6.innerHTML="Password field must atleast contain 8 characters";
                pwd.style.border="1px solid red";

                error4.innerHTML="";
                phno.style.border="none";

                error3.innerHTML="";
                email.style.border="none";

                return false;
            }
            else if((pwd.value) == (confpwd.value)){
                    return true;
                
            }
           
            else{
                error7.innerHTML="Passwords must be same";
                confpwd.style.border="1px solid red";
                error6.innerHTML="";
                pwd.style.border="none";
                return false;
            }
            
        }
    
    else if(((regexp.test(email.value))!=1)){
        error4.innerHTML="";
        phno.style.border="none";

        error3.innerHTML="Please enter valid email id";
        email.style.border="1px solid red";
        return false;
    }
    else if(((phoneno.test(phno.value))!=1)){
        error3.innerHTML="";
        email.style.border="none";

        error4.innerHTML="Please enter valid phone number";
        phno.style.border="1px solid red";
        return false;
    }
}



}

