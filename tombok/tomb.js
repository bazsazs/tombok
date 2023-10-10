// Tömb létrehozása
let myArray = [1,2,3];

// Függvény az elemek megjelenítéséhez
function showElement(index) {
    alert(myArray[index]);
}

// Függvény az összes elem megjelenítéséhez
function showAllElements() {
    alert(myArray.join(', '));
}

// Függvény új elem hozzáadásához
function addNewElement() {
    const newElement = document.getElementById('newElementInput').value;
    myArray.push(newElement);
    showAllElements();
}

// Függvény a tömb hosszának megjelenítéséhez
function showArrayLength() {
    alert(`A tömb ${myArray.length} elemet tartalmaz.`);
}

// Függvény elem törléséhez
function deleteElement() {
    const indexToDelete = document.getElementById('indexToDelete').value;
    myArray.splice(indexToDelete, 1);
    showAllElements();
}