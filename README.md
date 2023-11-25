# Trabalho 03 - DSDM

**Aluno:** Carlos Aldrim Freire Melo Filho

## Descrição

- Terceiro trabalho dirigido de Desenvolvimento de Software para Dispositivos Móveis.

## Aplicação

- Este é um aplicativo de gerenciamento de tarefas com funcionalidades de login e cadastro de conta de usuário. Ao se cadastrar, os usuários podem criar uma conta usando nome, email e senha. Após o login, os usuários têm acesso a um painel para adicionar tarefas por meio do ícone de adição (+).

- As tarefas são exibidas em duas listas distintas: tarefas abertas e tarefas concluídas. Os usuários podem marcar as tarefas como concluídas ou excluí-las, bastando selecionar as tarefas desejadas e escolher a ação correspondente. Para acessar detalhes ou editar uma tarefa, basta clicar duas vezes na respectiva tarefa na lista.

- Este projeto está totalmente integrado com uma API conectada a um banco de dados, permitindo que o Redux mantenha a sincronia entre o frontend e o backend. Essa integração oferece uma experiência fluida e dinâmica para os usuários, garantindo a persistência dos dados e a interatividade do sistema.

## API

```
  http://localhost:3333/tasks
  http://localhost:3333/task
```
```
  http://localhost:3333/users
  http://localhost:3333/user
  http://localhost:3333/login
```

## Capturas de Tela



## Tecnologias Utilizadas

# Frontend
- React Native
- HTML5
- CSS3
- React
- Javascript

# Backend
- Typescript
- Prisma
- MongoDB
- Postman

## Pré-requisitos

- Node.js (v14 ou superior)
- npm (v7 ou superior)

## Instalação

1. Clone este repositório.

  ```
  git clone https://github.com/carlos-aldrim/TrabalhoDirigido03
  ```

2. Navegue até o diretório da aplicação.

  ```
  cd TrabalhoDirigido03
  ```

3. Instale as dependências.

  ```
  cd Frontend
  npm install
  ```

  ```
  cd Backend
  npm install
  ```

  4. Nota: Se você ainda não tem o Expo instalado globalmente, você pode instalá-lo usando o seguinte comando:

  ```
  cd Frontend
  npm install -g expo-cli
  ```

5. Inicie a aplicação(Frontend).

  ```
  cd Frontend
  expo start
  ```
6. Inicie a aplicação(Backend).

  ```
  cd Backend
  npx prisma generate
  npm run dev
  ```
6. Iniciar o prisma(Backend).

  ```
  cd Backend
  npx prisma studio
  ```
