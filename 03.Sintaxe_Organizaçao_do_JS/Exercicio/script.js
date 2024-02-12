let respostas = [];  // Lista para armazenar as respostas

function exibirMensagem() {
    document.getElementById('response').innerHTML = '<p>Carregando...</p>';
}

function submitForm() {
    // Exibir mensagem de carregamento
    exibirMensagem();

    // Obter valores do formulário
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const gender = document.getElementById('gender').value;
    const interests = [...document.querySelectorAll('input[name="interests"]:checked')].map(checkbox => checkbox.value);
    const programmingLanguage = document.querySelector('input[name="programmingLanguage"]:checked')?.value;

    // Construir resposta
    const resposta = {
        nome: name,
        email: email,
        genero: gender,
        interesses: interests,
        linguagem: programmingLanguage || 'Nenhuma selecionada'
    };

    // Adicionar resposta à lista
    respostas.push(resposta);

    // Renderizar todas as respostas no HTML
    renderizarRespostas();

    // Limpar formulário
    document.getElementById('myForm').reset();

    // Limpar mensagem de carregamento
    document.getElementById('response').innerHTML = '';
}

function renderizarRespostas() {
    // Limpar a lista existente no HTML
    const responseList = document.getElementById('responseList');
    responseList.innerHTML = '';

    // Adicionar cada resposta à lista no HTML
    respostas.forEach((resposta, index) => {
        const listItem = document.createElement('li');
        listItem.innerHTML = `
            <p><strong>Nome:</strong> ${resposta.nome}</p>
            <p><strong>E-mail:</strong> ${resposta.email}</p>
            <p><strong>Gênero:</strong> ${resposta.genero}</p>
            <p><strong>Interesses:</strong> ${resposta.interesses.join(' e ', '.')}</p>
            <p><strong>Linguagem de Programação Favorita:</strong> ${resposta.linguagem}</p>
        `;
        responseList.appendChild(listItem);
    });
}

setTimeout(exibirMensagem, 3000);  // 2000 milissegundos (3 segundos)





