

const filaA = ['q', 'w', 'e', 'r', 't', 'y', 'u', 'i', 'o', 'p'];
const filaB = ['a', 's', 'd', 'f', 'g', 'h', 'j', 'k', 'l', 'Ñ'];
const filaC = ['z', 'x', 'c', 'v', 'b', 'n', 'm', ',', '.', '?'];

const title = document.querySelector('.title');
const form = document.querySelector('.form');
const inputSubit = document.querySelector('.input-sudmit');
const input = document.querySelector('.input');
const keyWordConatiner = document.querySelector('.teclado');
const letterContainer = document.createElement('div');


const newFila = (arr) => {

    arr.forEach((e, index) => {
        letterContainer.className = 'key-container';

        const letter = document.createElement('p');
        letter.className = 'key'
        letterContainer.appendChild(letter);

        keyWordConatiner.appendChild(letterContainer);


        letter.innerHTML = e;

        letter.addEventListener('click', (event) => {
            addToInPut(e)
        })

    });
}

newFila(filaA);
newFila(filaB);
newFila(filaC);

inputSubit.addEventListener('click', () => {
    handleSudmit();
})

const addToInPut = (e) => {
    input.value += e
}

const handleSudmit = () => {
    form.addEventListener('submit', (e) => {
        e.preventDefault();
        title.innerHTML = input.value;

        console.log(title.value);
    })

}

