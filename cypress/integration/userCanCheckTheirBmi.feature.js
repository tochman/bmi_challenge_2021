describe('User can check their BMI', () => {

  before(() => {
    cy.visit('/')
  });

  it('is expected to show main header off the app', () => {
    cy.get('h1').should('contain.text', 'BMI Calculator')
  });

  describe('inputing valid data', () => {
    before(() => {
      cy.get('input[name=weigth]').type(99)
      cy.get('input[name=height]').type(186)
      cy.get('button[name=calculate]').click()
    });

    it('is expected to return a BMI value', () => {
      cy.get('div[name=results]').should('contain.text', 'Your BMI value is 28.62')
    });
  });
});