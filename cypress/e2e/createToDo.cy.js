import CreateToDo from "../support/page_objects/CreateToDo";

describe ('Create ToDo', () => {
    const createToDo = new CreateToDo();
    it('Create a new ToDo and Verify', () => {
        createToDo.visit() // Acessa a página inicial do aplicativo
        createToDo.inputNewToDo() // Cria uma nova tarefa 
        createToDo.verifyNewToDo() // Verifica se a tarefa foi criada com sucesso e se está visivel
    });
})