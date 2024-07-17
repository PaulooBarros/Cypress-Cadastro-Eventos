function realizarCadastro() {
    // Lógica para realizar o cadastro (substitua com sua lógica real)
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;
    const confirmPassword = document.getElementById('confirm-password').value;

    // Exemplo simples de validação de senha
    if (password !== confirmPassword) {
        alert('As senhas não coincidem. Por favor, tente novamente.');
        return false;
    }

    // Simulação de cadastro bem-sucedido
    exibirMensagemCadastro();

    // Redirecionar para a página de login após o cadastro (tempo de espera de 2 segundos)
    setTimeout(function() {
        window.location.href = 'login.html';
    }, 2000);

    return false; // Evita o envio tradicional do formulário
}

function exibirMensagemCadastro() {
    const mensagemCadastro = document.createElement('div');
    mensagemCadastro.textContent = 'Cadastro realizado com sucesso!';
    mensagemCadastro.classList.add('mensagem-cadastro');
    document.body.appendChild(mensagemCadastro);

    setTimeout(function() {
        mensagemCadastro.classList.add('show'); // Adiciona a classe para mostrar a mensagem
    }, 100); // Pequeno delay para garantir a animação

    setTimeout(function() {
        mensagemCadastro.classList.remove('show'); // Remove a classe após alguns segundos
        setTimeout(function() {
            mensagemCadastro.remove(); // Remove completamente a mensagem do DOM
        }, 300); // Tempo da animação de fade-out
    }, 1500); // Tempo que a mensagem permanece visível (1.5 segundos)
}

function exibirMensagemLogin() {
    const mensagemLogin = document.createElement('div');
    mensagemLogin.textContent = 'Login realizado com sucesso!';
    mensagemLogin.classList.add('mensagem-login');
    document.body.appendChild(mensagemLogin);

    setTimeout(function() {
        mensagemLogin.classList.add('show'); // Adiciona a classe para mostrar a mensagem
    }, 100); // Pequeno delay para garantir a animação

    setTimeout(function() {
        mensagemLogin.classList.remove('show'); // Remove a classe após alguns segundos
        setTimeout(function() {
            mensagemLogin.remove(); // Remove completamente a mensagem do DOM
        }, 300); // Tempo da animação de fade-out
    }, 1500); // Tempo que a mensagem permanece visível (1.5 segundos)
}
