function checkNumber(){
    let number = document.getElementById("osztaly");
    if(number.value < number.min && number.value){
        number.value = number.min;
    }
    else if (number.value > number.max && number.value){
        number.value = number.max;
    }
}
