/// <reference types="cypress" />

import {TodoPage} from "../page-objects/todo-page";

describe('actions', () => {

    const todoPage = new TodoPage()

    beforeEach (() => {
        todoPage.navigate()
        todoPage.addToDo('Jugar a la play')
    })

    it('Add new todo', () => {
        todoPage.validateToDo('Jugar a la play')
    })

    it.only('Mark as completed', () => {
        cy.get('.toggle').click()
    })

    it('Clear completed', () => {
        cy.get('.toggle').click()
        cy.contains('Clear completed').click()
    })
})
