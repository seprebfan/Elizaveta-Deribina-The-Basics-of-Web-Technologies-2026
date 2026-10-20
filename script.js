function solveTask() {
       let A = parseFloat(document.getElementById('valA').value);
    let B = parseFloat(document.getElementById('valB').value);
    let C = parseFloat(document.getElementById('valC').value);

    if (isNaN(A) || isNaN(B) || isNaN(C)) {
        document.getElementById('result').innerText = "Ошибка: Введите все три числа!";
        return; 
    }

   
    let message = "";

    if (A < B && B < C) {
        message = "Выполняется неравенство: A < B < C";
    } 
   
    else if (A < B && B > C) {
        message = "Выполняется неравенство: A < B > C";
    } 
   
    else {
        message = "Ни одно из заданных неравенств не выполняется.";
    }


    document.getElementById('result').innerText = message;
}