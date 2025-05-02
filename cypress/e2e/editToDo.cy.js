import EditToDo from '../support/page_objects/EditToDo'

describe('Edit ToDo', () => {
    beforeEach(() => {
        cy.createToDo()  // Cria uma nova tarefa e verifica se está visível antes de cada teste
    })
    const editToDo = new EditToDo()
    it('Edit an existing ToDo and Verify', () => {
        editToDo.editToDoItem() // Edita a tarefa existente
        editToDo.verifyEditedToDo() // Verifica se a tarefa foi editada com sucesso e se está visivel
    })
})