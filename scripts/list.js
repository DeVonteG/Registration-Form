function displayUsers(usersArray){
    let row;
    for(let i=0; i<usersArray.length;i++){
        let user=usersArray[i];
        console.log(user);

        row=`
            <tr>
                <td>${user.userEmail}</td>
                <td>${user.firstName}</td>
                <td>${user.lastName}</td>
                <td>${user.userPhone}</td>
                <td>${user.userAge}</td>
            </tr>    
        
        `;
        $("#users").append(row);
    }
}

function init(){
    console.log("Listing Users");
    let users=readUsers();
    displayUsers(users);
}
window.onload=init;