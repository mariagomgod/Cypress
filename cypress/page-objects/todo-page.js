export class TodoPage {

    navigate () {
        cy.visit('http://todomvc-app-for-testing.surge.sh')
    }

    addToDo (text) {
        cy.get('.new-todo').type(text + "{enter}")
    }

    validateToDo (expected) {
        cy.get('label').should('have.text', expected)
    }
}