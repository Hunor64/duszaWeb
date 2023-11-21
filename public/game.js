let input = {
    elsoSzo: "egér",
    masodikSzo: "billentyűzet",
    harmadikSzo: "mikrofon",
    felada: "kamera",
    osztaly: 5
}
init(input);


//initialise
function init(input) {
    let newHTML = `
<h1>Szó Kirakós Játék</h1>
<div class="card">
    <span>${input.elsoSzo}</span>
</div>
<div class="card">
    <span>${input.masodikSzo}</span>
</div>
<div class="card">
    <span>${input.harmadikSzo}</span>
</div>
<table id="card">
    <tr id="row"></tr>
</table>
`;

    document.getElementById('container').innerHTML = newHTML;
}


//Add game elements
let card = document.getElementById("card");
let row = document.getElementById("row");
function getRandomNumber(min, max) {
    return Math.floor(Math.random() * (max - min)) + min;
}

function clearTable() {
    while (row.firstChild) {
        row.removeChild(row.firstChild);
    }
}

let addTable = (inputString) => {
    console.log("Feltöltés elkezdődőt!");
    var tempBetuk = inputString.split('');
    while (tempBetuk.length != 0) {
        var szamIndex = getRandomNumber(0, tempBetuk.length);
        let td = document.createElement("td");
        td.className = "element";
        td.draggable = "true";
        td.addEventListener("dragstart", dragstart);
        td.addEventListener("dragover", dragover);
        td.addEventListener("drop", drop);

        td.innerHTML = tempBetuk[szamIndex];
        tempBetuk.splice(szamIndex, 1);

        row.appendChild(td);
    }
    console.log("Feltöltés befejeződött!");
}

function addWordToTable(inputString) {
    clearTable();
    let td = document.createElement("td");
    td.className = "element";
    td.innerHTML = inputString;
    row.appendChild(td);
}

//Make draggable
let draggedElement;

function dragstart(event) {
    draggedElement = event.target;
}

function dragover(event) {
    event.preventDefault();
    event.dataTransfer.dropEffect = "move";
}

function drop(event) {
    event.preventDefault();
    let target = event.target;

    if (target.nodeName === "TD" && target.classList.contains("element")) {
        let temp = target.innerHTML;
        target.innerHTML = draggedElement.innerHTML;
        draggedElement.innerHTML = temp;
    }
    checkStringEquality(input.felada, row);
}

addTable(input.felada);

//check if win
function checkStringEquality(betuk, container) {
    let concatenatedString = "";

    let tdElements = container.getElementsByTagName("td");
    for (let i = 0; i < tdElements.length; i++) {
        concatenatedString += tdElements[i].innerHTML;
    }

    if (concatenatedString === input.felada) {
        console.log("Strings match!");
        addWordToTable(input.felada);
    } else {
        console.log("Strings do not match!");
    }
}