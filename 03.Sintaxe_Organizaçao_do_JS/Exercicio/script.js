function submitForm() {
    // Exibir mensagem de carregamento
    document.getElementById('response').innerHTML = '<p>Carregando...</p>';

    // Obter valores do formulário
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const gender = document.getElementById('gender').value;
    const interests = [...document.querySelectorAll('input[name="interests"]:checked')].map(checkbox => checkbox.value);
    const programmingLanguage = document.querySelector('input[name="programmingLanguage"]:checked')?.value;

    // Construir resposta
    const responseHTML = `
        <p><strong>Nome:</strong> ${name}</p>
        <p><strong>E-mail:</strong> ${email}</p>
        <p><strong>Gênero:</strong> ${gender}</p>
        <p><strong>Interesses:</strong> ${interests.join(' e ', '.')}</p>
        <p><strong>Linguagem de Programação Favorita:</strong> ${programmingLanguage || 'Nenhuma selecionada'}</p>
    `;

    // Adicionar resposta à lista
    const responseList = document.getElementById('responseList');
    const listItem = document.createElement('li');
    listItem.innerHTML = responseHTML;
    responseList.appendChild(listItem);

    // Limpar formulário
    document.getElementById('myForm').reset();

    // Limpar mensagem de carregamento
    document.getElementById('response').innerHTML = '';
}




