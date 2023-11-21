let users = [];
function saveData(){
    let jsonObject = {
        "Username": "",
        "Password": "",
        "Szint": ""
    }
    let username = document.getElementById('username').value;
    let password = document.getElementById('password').value;
    let mesterGomb = document.getElementById('webmester').checked;
    let tanarGomb = document.getElementById('tanar').checked;
    let tanuloGomb = document.getElementById('tanulo').checked;
    jsonObject.Username = username;
    jsonObject.Password = password;
    if(mesterGomb){
        jsonObject.Szint = "Mester";
    }
    else if(tanarGomb){
        jsonObject.Szint = "Tanar";
    }
    else if(tanuloGomb){
        jsonObject.Szint = "Tanulo";
    }
    users.push(jsonObject);
    console.log(users);
}