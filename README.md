# [Repositorios.dev](https://www.repositorios.dev)
Repositorios.dev é um projeto open-source focado na comunidade da área de tecnologia, destinado a compartilhar, descobrir e impulsionar projetos.

Esse repositório contém o código-fonte do site e da API do Repostios.dev.
## Conteúdo

- [Instalar e rodar o projeto](#instalar-e-rodar-o-projeto)
  - [Pré-requisitos](#pré-requisitos)
  - [Instalação](#instalação)
  - [Execução](#execução)
- [Estrutura do Projeto](#estrutura-do-projeto)
- [Dependências](#dependências)
- [Licença](#licença)
# Projeto Frontend

Este é o repositório do projeto frontend desenvolvido com Next.js.

## Estrutura do Projeto

A estrutura principal do projeto é a seguinte:

```
frontend/
├── .next/                # Arquivos gerados pelo Next.js durante a build
├── src/                  # Código-fonte do projeto
│   ├── app/              # Diretório de páginas e layouts
│   │   ├── page.js       # Dashboard inicial (usuários comuns)
│   │   ├── globals.css   # Estilos globais
│   │   ├── (user)        # Rotas e layouts para usuários comuns
│   │   └── (admin)       # Rotas e layouts do admin
├── components/           # Componentes reutilizáveis
│   ├── layout/           # Header, Footer, Navbar, Sidebar, ...
│   ├── ui/               # Botões, inputs, modais, cards, ...
├── node_modules/         # Dependências do projeto
├── package.json          # Configuração do projeto e dependências
├── README.md             # Documentação do projeto
└── ...                   # Outros arquivos de configuração
```

## Dependências

O projeto utiliza as seguintes dependências principais:

- **Next.js**: Framework React para renderização do lado do servidor e geração de sites estáticos.
- **React**: Biblioteca para construção de interfaces de usuário.

## Pré-requisitos

Certifique-se de ter as seguintes ferramentas instaladas:

- Node.js (versão recomendada: 16 ou superior)
- npm ou yarn (gerenciador de pacotes)

## Instalação

1. Clone o repositório:
   ```bash
   git clone <URL_DO_REPOSITORIO>
   ```

2. Acesse o diretório do projeto:
   ```bash
   cd frontend
   ```

3. Instale as dependências:
   ```bash
   npm install
   yarn run dev
   ```

## Execução

Para rodar o projeto em ambiente de desenvolvimento:

```bash
npm run dev
## ou
yarn run dev
```

O projeto estará disponível em `http://localhost:3000`.

## Licença

Este projeto está licenciado sob a [MIT License](LICENSE).

---
