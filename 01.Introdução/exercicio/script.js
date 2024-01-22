// Método 1: Inserindo diretamente no corpo da página
document.body.innerHTML += '<div class="shape">Hello World 1</div>';

// Método 2: Criando um novo elemento e adicionando ao corpo
const divElement = document.createElement('div');
divElement.className = 'shape';
divElement.textContent = 'Hello World 2';
document.body.appendChild(divElement);

// Método 3: Utilizando innerHTML com template string
const helloWorld3 = '<div class="shape">Hello World 3</div>';
document.body.innerHTML += helloWorld3;

// Método 4: Usando createElement para criar um parágrafo
const paragraphElement = document.createElement('p');
paragraphElement.className = 'shape';
paragraphElement.textContent = 'Hello World 4';
document.body.appendChild(paragraphElement);

// Método 5: Adicionando usando um fragmento
const fragment = document.createDocumentFragment();
for (let i = 5; i <= 8; i++) {
    const div = document.createElement('div');
    div.className = 'shape';
    div.textContent = 'Hello World ' + i;
    fragment.appendChild(div);
}
document.body.appendChild(fragment);

// Método 6: Usando insertAdjacentHTML
const elementWithHTML = document.createElement('div');
for (let i = 9; i <= 10; i++) {
    elementWithHTML.insertAdjacentHTML('beforeend', `<div class="shape">Hello World ${i}</div>`);
}
document.body.appendChild(elementWithHTML);





