class EditToDo {
  elements = {
    editToDoItem: () => cy.get('[data-testid="todo-item-label"]'),
    verifyEditedToDo: () => cy.get('[data-testid="todo-item-label"]')
  };

  editToDoItem() {
    this.elements.editToDoItem().dblclick()
    cy.get('.view > .input-container > [data-testid="text-input"]')
      .clear()
      .type('Edited ToDo Item' + '{enter}')
  }

  verifyEditedToDo() {
    this.elements.verifyEditedToDo().should('contain', 'Edited ToDo Item')
  }
}

export default EditToDo;
