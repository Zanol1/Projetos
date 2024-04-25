const formulario = document.getElementById('formulario');

formulario.addEventListener('submit', function(event) {
    event.preventDefault(); // Evita o envio padrão do formulário

    const titulo = document.getElementById('titulo').value;
    const autor = document.getElementById('autor').value;
    const genero = document.getElementById('genero').value;
    const estado = document.getElementById('estado').value;
    const nomeDoador = document.getElementById('nomeDoador').value;
    const contatoDoador = document.getElementById('contatoDoador').value;

    // Validação opcional (evita envio de dados incompletos)
    if (titulo === '' || autor === '' || genero === '' || estado === '') {
        alert('Preencha todos os campos obrigatórios!');
        return; // Interrompe a execução do código caso a validação falhe
    }

    // Armazena cada campo individualmente no localStorage
    localStorage.setItem('titulo', titulo);
    localStorage.setItem('autor', autor);
    localStorage.setItem('genero', genero);
    localStorage.setItem('estado', estado);
    localStorage.setItem('nomeDoador', nomeDoador);
    localStorage.setItem('contatoDoador', contatoDoador);

    alert('Livro cadastrado com sucesso!');
});
