class CreateToDo {
  elements = { 
    inputNewToDo: () => cy.get('[data-testid="text-input"]'),
    newToDoItem: () => cy.get('[data-testid="todo-item-label"]'),
  }

  visit () {
    cy.visit('/')
  }

  inputNewToDo () {
    this.elements.inputNewToDo().type('New ToDo Item' + '{enter}')
  }
  
  verifyNewToDo () {
    this.elements.newToDoItem().should('contain', 'New ToDo Item')
    }

}

export default CreateToDo;