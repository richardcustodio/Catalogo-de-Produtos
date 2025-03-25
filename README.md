# 📦 Catálogo de Produtos (React + Vite)

Este projeto é um catálogo de produtos interativo desenvolvido utilizando a biblioteca React e o bundler Vite. Ele oferece funcionalidades completas de CRUD (Criar, Ler, Atualizar e Deletar) para gerenciar uma lista de produtos, com persistência de dados utilizando o LocalStorage do navegador.

**Este projeto também foi desenvolvido como parte de um desafio no curso da Alura, dedicado a aprimorar minhas habilidades em desenvolvimento frontend.**

## 🚀 Tecnologias Utilizadas

- **Vite + React:** Ambiente de desenvolvimento rápido e eficiente para aplicações React modernas.
- **CSS:** Estilização responsiva para garantir uma boa experiência em diferentes dispositivos.
- **JavaScript (ES6+):** Lógica da aplicação, manipulação de estado e eventos.
- **LocalStorage:** Persistência de dados no navegador do usuário.

## 🎯 Objetivo do Projeto

Criar uma aplicação web completa e funcional para gerenciar um catálogo de produtos. O objetivo é permitir que os usuários realizem operações básicas de CRUD (Criar, Ler, Atualizar e Deletar) de forma intuitiva e com uma interface responsiva, além de oferecer opções de personalização visual através de temas claro e escuro.

## 📌 Funcionalidades Principais

- **Criação de Produtos:** Adicione novos produtos ao catálogo informando nome, preço, descrição e URL de imagem.
- **Listagem de Produtos:** Visualize todos os produtos cadastrados em uma lista organizada com informações detalhadas.
- **Edição de Produtos:** Modifique as informações de produtos existentes de forma fácil e rápida.
- **Exclusão de Produtos:** Remova produtos do catálogo com uma confirmação de segurança.
- **Suporte a Imagens:** Exiba imagens dos produtos através de URLs fornecidas.
- **Temas:** Alterne entre os temas claro e escuro para uma experiência visual confortável em diferentes ambientes.

## 🛠 Estrutura do Projeto

catalogo-produtos/
├── public/
├── src/
│ ├── components/
│ │ ├── ProductForm.jsx # Formulário de criação e edição
│ │ ├── ProductList.jsx # Lista de produtos cadastrados
│ │ └── ProductCard.jsx # Card individual de produto
│ ├── App.jsx # Componente principal do app
│ ├── main.jsx # Ponto de entrada da aplicação
│ ├── styles.css # Estilos globais
│ └── assets/ # (Opcional) Pasta para imagens e outros assets
├── package.json
├── vite.config.js
└── README.md (Este arquivo)

## 🖥️ Interface do Usuário

A interface do usuário é simples, intuitiva e responsiva, projetada para facilitar a interação com o catálogo de produtos:

- **Formulário de Adição/Edição:** Um formulário claro e direto para inserir os detalhes de um novo produto ou modificar um existente. Contém campos para nome, preço, descrição e URL de imagem.
- **Lista de Produtos:** Os produtos cadastrados são exibidos em uma lista de cards. Cada card mostra o nome, preço, descrição e uma imagem (se fornecida) do produto.
- **Botões de Ação:** Cada card de produto possui botões "Editar" e "Excluir" para realizar as respectivas ações no produto.
- **Temas:** Implementação de temas claro e escuro para melhor experiência do usuário em diferentes condições de iluminação.

## ⚙️ Como Executar o Projeto

1.  **Clone o repositório:**
    ```bash
    git clone [URL_DO_SEU_REPOSITORIO]
    cd catalogo-produtos
    ```
2.  **Instale as dependências:**
    ```bash
    npm install
    # ou
    yarn install
    # ou
    pnpm install
    ```
3.  **Inicie o servidor de desenvolvimento:**
    ```bash
    npm run dev
    # ou
    yarn dev
    # ou
    pnpm dev
    ```
4.  Abra seu navegador e acesse o endereço fornecido pelo Vite (geralmente `http://localhost:5173/`).

## 🔹 Fluxo do CRUD

1.  **Criar Produto (Create):**

    - O usuário preenche os campos de Nome, Preço, Descrição e URL da Imagem no formulário.
    - Ao submeter, um novo objeto de produto é criado e adicionado ao estado do React.
    - A lista de produtos é re-renderizada para exibir o novo item.
    - O produto é persistido no LocalStorage do navegador.

2.  **Listar Produtos (Read):**

    - Ao carregar a aplicação, a lista de produtos é recuperada do LocalStorage (se houver) e exibida na tela.
    - Caso o LocalStorage esteja vazio ou não haja produtos cadastrados, uma mensagem "Nenhum produto cadastrado." será mostrada.

3.  **Editar Produto (Update):**

    - O usuário clica no botão "Editar" no card do produto desejado.
    - As informações do produto são carregadas automaticamente no formulário de edição.
    - O usuário pode modificar os campos e clicar em "Salvar Edição".
    - O produto é atualizado no estado do React e a lista é re-renderizada.
    - As alterações são salvas no LocalStorage.

4.  **Excluir Produto (Delete):**
    - O usuário clica no botão "Excluir" no card do produto que deseja remover.
    - Um alerta de confirmação é exibido para garantir a intenção de exclusão.
    - Ao confirmar, o produto é removido do estado do React e a lista é atualizada.
    - O produto é removido do LocalStorage.

## 🎨 Temas

O projeto inclui suporte para temas claro e escuro, permitindo ao usuário escolher a preferência visual da aplicação. A troca de temas também altera a imagem de fundo da página, proporcionando uma experiência mais imersiva. A preferência de tema é persistida utilizando o LocalStorage.

## 👨‍💻 Créditos

Este projeto foi desenvolvido como parte de um **desafio da Alura**, um curso dedicado a aprender mais sobre desenvolvimento frontend e React.js. Agradeço à Alura pela oportunidade de colocar meus conhecimentos em prática e desenvolver esta aplicação.

---

Agradeço por conferir este projeto! 😄
