
# Cypress Cadastro de Eventos

Este projeto utiliza [Cypress](https://www.cypress.io) para testar a funcionalidade de cadastro de eventos de uma aplicação web. Os testes são automatizados e configurados para serem executados automaticamente no GitHub Actions.

## Pré-requisitos

Certifique-se de ter os seguintes pré-requisitos instalados em sua máquina:

- [Node.js](https://nodejs.org) (versão 14 ou superior)
- [npm](https://www.npmjs.com)

## Instalação

1. Clone o repositório:

    ```bash
    git clone https://github.com/seu-usuario/Cypress-Cadastro-Eventos.git
    cd Cypress-Cadastro-Eventos
    ```

2. Instale as dependências:

    ```bash
    npm install
    ```

## Estrutura do Projeto

A estrutura do projeto é a seguinte:

```plaintext
Cypress-Cadastro-Eventos/
│
├── cypress/
│   ├── fixtures/
│   ├── integration/
│   │   ├── TestCadastro.spec.js
│   │   ├── TestIndex.spec.js
│   │   ├── TestLogin.spec.js
│   │   └── TestandoPaginaPolitica.spec.js
│   ├── plugins/
│   └── support/
│
├── .github/
│   └── workflows/
│       └── cypress.yml
│
├── cypress.json
├── package.json
└── README.md
```

## Executando os Testes

### Localmente

Para executar os testes localmente, utilize o comando:

```bash
npx cypress open
```

Isso abrirá a interface gráfica do Cypress, onde você poderá selecionar e executar os testes interativamente.

Para executar os testes em modo headless (sem interface gráfica), use:

```bash
npx cypress run
```

### GitHub Actions

Os testes são configurados para serem executados automaticamente no GitHub Actions a cada push ou pull request na branch `main`. O workflow de GitHub Actions está definido em `.github/workflows/cypress.yml`.

#### Configuração do Workflow

Aqui está o conteúdo do arquivo de workflow `cypress.yml`:

```yaml
name: Cypress Tests

on:
  push:
    branches:
      - main
  pull_request:
    branches:
      - main

jobs:
  cypress-run:
    runs-on: ubuntu-latest

    steps:
      - name: Checkout repository
        uses: actions/checkout@v2

      - name: Setup Node.js
        uses: actions/setup-node@v2
        with:
          node-version: '14'

      - name: Install dependencies
        run: npm install

      - name: Run Cypress tests
        run: npx cypress run
```

## Depuração

Se os testes falharem, você pode verificar os logs e screenshots gerados na pasta `cypress/screenshots/` e os vídeos na pasta `cypress/videos/`. Esses arquivos ajudam a identificar o que pode ter dado errado durante a execução dos testes.

### Erros Comuns

- **Dependências ausentes**: Certifique-se de que todas as dependências estão instaladas corretamente.
- **Variáveis de ambiente**: Configure corretamente as variáveis de ambiente se necessário.
- **Configurações do Cypress**: Verifique se o arquivo `cypress.json` está configurado corretamente para o seu ambiente de teste.

## Contribuição

Se você deseja contribuir com este projeto, siga as etapas abaixo:

1. Faça um fork do repositório.
2. Crie uma branch para sua feature ou correção: `git checkout -b minha-feature`
3. Commit suas mudanças: `git commit -m 'Adiciona minha nova feature'`
4. Faça push para a branch: `git push origin minha-feature`
5. Abra um Pull Request.

## Licença

Este projeto está licenciado sob a [MIT License](LICENSE).

```

### Pontos Adicionais

- **Customização**: Ajuste as informações de acordo com o seu repositório específico, incluindo o link do repositório e quaisquer instruções específicas do seu projeto.
- **Licença**: Se você tiver um arquivo de licença específico, substitua a referência no README.
- **Detalhes do Projeto**: Adicione mais detalhes sobre a funcionalidade dos testes, tecnologias utilizadas e quaisquer outras informações relevantes sobre o projeto.

Sinta-se à vontade para ajustar e expandir conforme necessário. Se precisar de mais alguma coisa, estou à disposição!
