/* eslint-disable no-undef */
/// <reference types="Cypress" />

describe('Login', () => {
  it('Visits login', () => {
    cy.visit('http://localhost:3000');
    cy.findByText('Login').click();
    cy.findByText('Login details').should('exist');
  });
  it('Sign in as user', () => {
    cy.findByLabelText('Username').type('user');
    cy.findAllByLabelText('Password').type('test1');
    cy.get('#loginBtn').click();
    cy.findByText('Home').should('exist');
    cy.findByText('Jokes').should('exist');
  });
  it('Log out', () => {
    cy.get('#logBtn').click();
    cy.get('#logoutBtn').click();
    cy.findByText('Jokes').should('not.exist');
  });
});
