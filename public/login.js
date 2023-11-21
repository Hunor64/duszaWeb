let users = [
    {
        "Username": "admin",
        "Password": "admin",
        "Szint": "Mester"
    }
]

function login() {


    let jsonObject = {
        "Username": "",
        "Password": "",
        "Szint": ""
    }

    let username = document.getElementById('username').value
    let password = document.getElementById('password').value
    let mesterGomb = document.getElementById('webmester').checked;
    let tanarGomb = document.getElementById('tanar').checked;
    let tanuloGomb = document.getElementById('tanulo').checked;


    if (mesterGomb) {
        jsonObject.Szint = "Mester";
    }
    else if (tanarGomb) {
        jsonObject.Szint = "Tanar";
    }
    else if (tanuloGomb) {
        jsonObject.Szint = "Tanulo";
    }

    jsonObject.Username = username;
    jsonObject.Password = password;

    if(jsonObject.Szint === "Mester") {
        location.href='/register';
    }
    else if(jsonObject.Szint === "Tanar") {
        location.href='/tanarPanel';
    }
    else if(jsonObject.Szint === "Tanulo") {
        location.href='/game';
    }

}
