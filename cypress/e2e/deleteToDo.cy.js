import DeleteToDo from "../support/page_objects/DeleteToDo";

describe('Delete ToDo', () => {
    beforeEach(() => {
        cy.createToDo()  // Cria uma nova tarefa e verifica se está visível antes de cada teste
    })
    const deleteToDo = new DeleteToDo()
    it('delete a existing todo and verify it', () => {
        deleteToDo.getToDoItem() // Verifica se a tarefa está visível antes de deletar
        deleteToDo.deleteToDoItem() // Deleta a tarefa existente
    })})
