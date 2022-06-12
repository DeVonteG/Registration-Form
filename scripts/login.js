function login(){
    let inputEmail=$("#txtUserName").val();
    let inputPass=$("#txtPassword").val();
    let flag=false;
    let userList= readUsers();

    for(let i=0;i<userList.length;i++){
        let user=userList[i];

        if(user.email==inputEmail && user.password==inputPass){
            flag=true;
            window.location= "users.html";
        }
        if(!flag){
            $("#alertError").removeClass("hide");
            setTimeout(function(){
                $("#alertError").addClass("hide");
            },3000);
        }
    }
}
function init(){
    $("#btnLogin").click(login);
    // $("#txtPassword").keypress(function(e){
    //     if(e.key=="Enter"){
    //     login();
    //     }
    // });

}
window.onload=init;