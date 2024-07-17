function realizarLogin() {
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;

    // Verificação das credenciais de login
    if (username === 'admin' && password === '1234') {
        exibirMensagemLogin();

        // Redirecionar para a página de feed após o login (tempo de espera de 2 segundos)
        setTimeout(function() {
            window.location.href = 'feed.html';
        }, 2000);

        return false; // Evita o envio tradicional do formulário
    } else {
        exibirMensagemErroLogin();
        return false;
    }
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


function exibirMensagemErroLogin() {
    const mensagemErroLogin = document.createElement('div');
    mensagemErroLogin.textContent = 'Usuário ou senha incorretos. Por favor, tente novamente.';
    mensagemErroLogin.classList.add('mensagem-erro-login');
    document.body.appendChild(mensagemErroLogin);

    setTimeout(function() {
        mensagemErroLogin.classList.add('show'); // Adiciona a classe para mostrar a mensagem de erro
    }, 100); // Pequeno delay para garantir a animação

    setTimeout(function() {
        mensagemErroLogin.classList.remove('show'); // Remove a classe após alguns segundos
        setTimeout(function() {
            mensagemErroLogin.remove(); // Remove completamente a mensagem do DOM
        }, 300); // Tempo da animação de fade-out
    }, 3000); // Tempo que a mensagem de erro permanece visível (3 segundos)
}
