document.addEventListener('DOMContentLoaded', function() {
    const form = document.getElementById('evento-form');
    const tableBody = document.querySelector('#eventos-table tbody');
    const successMessage = document.querySelector('.mensagem-cadastro');

    if (form && tableBody && successMessage) {
        form.addEventListener('submit', function(event) {
            event.preventDefault();

            const nome = form.elements['nome'].value;
            const local = form.elements['local'].value;
            const valor = form.elements['valor'].value || '-';
            const data = form.elements['data'].value;
            const atracoes = form.elements['atracoes'].value || '-';
            const descricao = form.elements['descricao'].value || '-';

            // Criar nova linha na tabela com os dados do evento
            const newRow = document.createElement('tr');
            newRow.innerHTML = `
                <td>${nome}</td>
                <td>${local}</td>
                <td>${valor}</td>
                <td>${data}</td>
                <td>${atracoes}</td>
                <td>${descricao}</td>
            `;

            // Adicionar uma classe para distinguir linhas pares e ímpares
            const rowCount = tableBody.rows.length;
            newRow.classList.add(rowCount % 2 === 0 ? 'even' : 'odd');

            tableBody.appendChild(newRow);

            // Exibir mensagem de sucesso
            successMessage.style.display = 'block';
            setTimeout(function() {
                successMessage.style.display = 'none';
            }, 3000);

            // Limpar formulário após cadastro
            form.reset();
        });
    } else {
        console.error('Algum dos elementos essenciais não foi encontrado no DOM.');
    }
});
