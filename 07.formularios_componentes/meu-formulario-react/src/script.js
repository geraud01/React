let responses = [];

function submitForm() {
    const formData = {
        name: document.getElementById('name').value,
        email: document.getElementById('email').value,
        gender: document.getElementById('gender').value,
        interests: [...document.querySelectorAll('input[name="interests"]:checked')].map(checkbox => checkbox.value),
        programmingLanguage: document.querySelector('input[name="programmingLanguage"]:checked')?.value,
        timestamp: new Date()
    };

    responses.push(formData);
    clearForm();
    updateResponseList();
    console.log('Resposta enviada:', formData);
}

function clearForm() {
    document.getElementById('myForm').reset();
}

function updateResponseList() {
    const responseList = document.getElementById('responseList');
    responseList.innerHTML = '';

    responses.sort((a, b) => b.timestamp - a.timestamp);

    responses.forEach((response, index) => {
        const listItem = document.createElement('li');
        listItem.innerHTML = `
            Resposta ${index + 1}: 
            <button onclick="deleteResponse(${index})">Excluir</button>
            <button onclick="showDetails(${index})">Detalhes</button>
        `;
        responseList.appendChild(listItem);
    });
}

function deleteResponse(index) {
    responses.splice(index, 1);
    updateResponseList();
}

function showDetails(index) {
    const responseDetails = responses[index];
    alert(JSON.stringify(responseDetails, null, 2));
}

window.onload = updateResponseList;
