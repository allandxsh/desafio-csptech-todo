import CreateToDo from "./page_objects/CreateToDo"

Cypress.Commands.add('createToDo', ( )=> {
    const createToDo = new CreateToDo();
    createToDo.visit() // Acessa a página inicial do aplicativo
    createToDo.inputNewToDo() // Cria uma nova tarefa
    createToDo.verifyNewToDo() // Verifica se a tarefa foi criada com sucesso e se está visivel
})