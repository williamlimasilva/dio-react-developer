# 🧮 Calculadora React

Este projeto é uma aplicação de calculadora simples construída com React. Ele demonstra o uso de componentes funcionais, hooks e styled-components para criar uma interface de usuário interativa e estilizada.

## Estrutura do Projeto

A estrutura do projeto é a seguinte:

### 📂 Arquivos e Pastas

- **public/**: Contém arquivos públicos que não são processados pelo Webpack.

  - `index.html`: O arquivo HTML principal.
  - `manifest.json`: Arquivo de manifesto para PWA.
  - `robots.txt`: Arquivo de configuração para bots de busca.

- **src/**: Contém o código-fonte da aplicação.
  - `App.js`: Componente principal da aplicação.
  - `components/Utils/Calculator.js`: Componente da calculadora.
  - `index.js`: Ponto de entrada da aplicação React.

### 🌳 Estrutura de Pastas

```
📂 calculadora/
 ├── 📂public/
 │    ├── index.html
 │    ├── manifest.json
 │    └── robots.txt
 ├── 📂src/
 │    ├── components/
 │    │   └── Utils/
 │    │       └── Calculator.js
 │    │
 │    ├── App.js
 │    └── index.js
 ├── .gitignore
 ├── package.json
 └── README.md
```

## Padrões de Design Empregados

- **Componentização**: A aplicação é dividida em componentes reutilizáveis.
- **Styled-components**: Estilização dos componentes utilizando a biblioteca styled-components para manter os estilos encapsulados e modularizados.

## Dependências

As principais dependências do projeto são:

- `react`: Biblioteca principal para construir a interface de usuário.
- `react-dom`: Biblioteca para manipulação do DOM com React.
- `react-scripts`: Scripts e configurações para criar e rodar a aplicação React.
- `styled-components`: Biblioteca para estilização de componentes.

## Scripts Disponíveis

No diretório do projeto, você pode executar:

### `npm start`

Roda a aplicação em modo de desenvolvimento.\
Abra [http://localhost:3000](http://localhost:3000) para ver no navegador.

### `npm run build`

Cria a aplicação para produção na pasta `build`.\
A aplicação é otimizada para melhor performance.

### `npm test`

Inicia o executor de testes no modo interativo.

### `npm run eject`

Remove a dependência de build única do projeto. **Esta operação é irreversível.**

## Funcionalidades da Calculadora

A calculadora suporta as seguintes operações:

- Adição (`+`)
- Subtração (`-`)
- Multiplicação (`*`)
- Divisão (`/`)
- Porcentagem (`%`)
- Igualdade (`=`)

## Como Usar

1. Clone o repositório.
2. Instale as dependências com `npm install`.
3. Inicie a aplicação com `npm start`.

## Contribuição

Sinta-se à vontade para contribuir com melhorias ou correções. Para isso, faça um fork do projeto, crie uma branch para sua feature ou correção, e envie um pull request.

## Licença

Este projeto está licenciado sob a licença MIT. Veja o arquivo [LICENSE](LICENSE) para mais detalhes.
