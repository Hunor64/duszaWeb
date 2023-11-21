let textbox = document.getElementById('textbox')
let subheading = document.getElementById('sub-heading')

function ChangeToDefault() {
    subheading.innerText = "Üdvözlet!"
    textbox.innerText = "Üdvözöllek a weboldalon! A fenti sávban tudsz regisztrálni és, vagy bejelentkezni, és játszani/játékot készíteni."    
}

function ChangeToJatekinfo() {
    subheading.innerText = "Játékleírás"
    textbox.innerText = "A Szókirakó Kihívás egy izgalmas és agytorna jellegű játék, amely arra összpontosít, " +
    "hogy a játékosoknak három előre meghatározott szóhoz hasonló témakörű negyedik szót összerakjanak az összekevert betűkből."
}