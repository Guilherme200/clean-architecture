# Projeto Frontend com Arquitetura Limpa

Este é um projeto frontend que segue os princípios da Arquitetura Limpa (Clean Architecture) 
para manter uma separação clara entre a lógica de negócios (core) e a camada de UI/UX (Nuxt3). Ele utiliza 
TypeScript e Nuxt 3 como framework principal.

## Visão Geral

A Arquitetura Limpa é uma abordagem de desenvolvimento de software que enfatiza a organização do código 
em camadas, com o objetivo de tornar o código mais modular, testável e independente de frameworks.
Neste projeto, seguimos esses princípios estritamente:

**Core:** O core do sistema contém a lógica de negócios da aplicação. Ele é completamente independente 
de qualquer framework ou biblioteca externa. Aqui estão as regras de negócios e a lógica principal do aplicativo.

**Nuxt3:** A camada Nuxt3 representa a camada de UI/UX responsável por lidar com a interface do usuário e 
a experiência do usuário. Neste caso, Nuxt 3 é usado para construir as páginas e componentes da interface do usuário,
mas eles são mantidos separados do core e não contêm lógica de negócios.

**Testes Unitários:** A aplicação inclui testes unitários rigorosos para garantir a qualidade do código e a 
robustez do sistema. Utilizamos ferramentas como Jest e Vue Test Utils para escrever e executar testes unitários.

**Encapsulamento de Bibliotecas Externas:** Todas as bibliotecas externas são encapsuladas dentro do core, 
garantindo que a lógica de negócios não dependa diretamente delas. Isso facilita a substituição ou atualização 
de bibliotecas sem afetar o core.

**Flexibilidade para Outros Frameworks:** A arquitetura deste projeto foi projetada com a flexibilidade em mente.
O core é independente do framework de UI e pode ser facilmente substituído por outros, como Angular ou React
e entre outros, se necessário.

## Pré-requisitos

Certifique-se de ter os seguintes pré-requisitos instalados antes de iniciar:

Node.js (versão >= 18.0.0)
NPM (versão >= 9.0.0 )

## Configuração do Projeto

1. Clone este repositório do GitHub para sua máquina local:
```bash
# npm
git clone https://github.com/Guilherme200/clean-architecture.git
```
2. Navegue até o diretório do projeto:
```bash
# npm
cd clean-architecture/frontend
```

3.Instale as dependências do projeto:
```bash
# npm
npm install
```

## Executando o Projeto

Para iniciar o servidor de desenvolvimento, execute o seguinte comando:
```bash
# npm
npm run dev
```
Isso iniciará o servidor local e você poderá acessar o projeto em http://localhost:3000.

## Testes Unitários

Você pode executar os testes unitários usando o seguinte comando:
```bash
# npm
npm run test
```

## Licença

Este projeto está licenciado sob a licença **MIT**.