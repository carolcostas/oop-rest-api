## Documentação da API de Teste com POO

Este repositório foi criado para exercitar os conceitos de Programação Orientada a Objetos (POO) no desenvolvimento de uma API simples utilizando Node.js e Express.

Visão Geral

A API permite gerenciar autores e postagens, com funcionalidades CRUD (Create, Read, Update, Delete). Ela está estruturada de forma a separar as lógicas de controle, modelos e dados, promovendo boas práticas no desenvolvimento.

<br><br>
Estrutura do Projeto
---
controladores/: Contém os controladores da API, onde está implementada a lógica de negócio.

modelos/: Contém as classes que representam os dados da aplicação.

bancodedados.ts: Armazena os dados em arrays para simulação de um banco de dados.

rotas.ts: Define as rotas da API e mapeia os controladores.

<br><br>
Tecnologias Utilizadas
---
<br>
Node.js: Ambiente de execução JavaScript.

Express: Framework para criação de APIs.

UUID: Biblioteca para geração de IDs únicos.

TypeScript: Superset do JavaScript com tipagem estática.

