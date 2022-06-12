function User(fName,lName,email,password,phone,age){
    this.firstName=fName;
    this.lastName=lName;
    this.userEmail=email;
    this.password= password;
    this.userPhone=phone;
    this.userAge=age;
}
function isValid(user){
    let valid=true;
    if(user.userEmail.length==0 || user.userEmail==""){
        valid=false;
        $("#txtEmail").addClass("input-error");
    }
    if(user.firstName==""){
        valid=false;
        $("#txtFirstName").addClass("input-error");
    }
    if(user.lastName==""){
        valid=false;
        $("#txtLastName").addClass("input-error");
    }
    if(user.password.length<6 && user.password==""){
        valid=false;
        $("#txtPassword").addClass("input-error");   
    }
    if(user.userPhone.length<12 && user.userPhone.length>12 && user.userPhone==""){
        valid=false;
        $("#txtPhone").addClass("input-error");
    }
    return valid;
}
function validatePass(){
    console.log("validating pass");
    let txtPass= $("#txtPassword");

    let password = txtPass.val();
        if(password.length<6){
            txtPass.css("background","#ff9898");
            displayError("The Password is too short");    
        }else{
            txtPass.css("background","#64cc66");
            hideError();
        }
}

function displayError(msg){
    $("#alertError").removeClass("hide").text(msg);
}
function hideError(){
    $("#alertError").addClass("hide");
}

function register(){
    
    let userFirstName = $("#txtFirstName").val();
    let userLastName = $("#txtLastName").val();
    let userName = $("#txtEmail").val();
    let userPass = $("#txtPassword").val();
    let userPhone = $("#txtPhone").val();
    let userAge = $("#txtAge").val();


    let newUser = new User(userFirstName, userLastName, userName, userPass, userPhone, userAge);

    if(isValid(newUser)==true){
        saveUser(newUser);
        hideError();
        $("input").val("");
    } else{
        displayError("Please Complete all the fields");
    }
}

function init(){
    $("#btnRegister").click(register);
    $("#txtPassword").keypress(function(e){
        if(e.key=="Enter"){
            register();
        }
    });
    $("#txtPassword").keyup(validatePass);
}
window.onload=init;