class DeleteToDo {
 elements = {
    getToDoItem: () => cy.get('[data-testid="todo-item-label"]'),
    deleteToDoItem: () => cy.get('[data-testid="todo-item-button"]'),
 };

 getToDoItem() {
    this.elements.getToDoItem().should('be.visible')
    .trigger('mouseover', { force: true })
  }
  deleteToDoItem() {
    this.elements.deleteToDoItem().click({ force: true })
    cy.get('[data-testid="todo-item-label"]').should('not.exist')
  }
}


export default DeleteToDo