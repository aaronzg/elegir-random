const inputName = document.querySelector('#name');
const inputCondition = document.querySelector('#condition-input');
const addButton = document.querySelector('#boton');
const conditionButton = document.querySelector('#button-condition');
const startMatch = document.querySelector('#startMatch');

const result = document.querySelector('#name-text')
const condition = document.querySelector('#condition');


const lista = document.querySelector('#lista');
const arrayLista = [];
    

addButton.addEventListener('click', (e) => {
    e.preventDefault;
    const newElement = document.createElement("li");
    if(inputName.value) {
        
        newElement.textContent = inputName.value;
        arrayLista.push(newElement.textContent);
        lista.appendChild(newElement);

    }

});

conditionButton.addEventListener('click',(e) => {
    e.preventDefault;
    if(inputCondition.value) {
        condition.textContent = inputCondition.value;
    }
})

startMatch.addEventListener('click', (e) => {
    result.textContent = arrayLista[Math.floor(Math.random() * arrayLista.length)];
})