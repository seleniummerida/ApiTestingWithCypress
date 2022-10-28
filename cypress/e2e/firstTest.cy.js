describe('TODO api testing', () => {
    let todoItem;
    it('fetches Todo items - GET', () => {
        cy.request('/todos/').as('todoRequest');
        cy.get('@todoRequest').then(todoss => {
            expect(todoss.status).to.eq(200);
            assert.isArray(todoss.body, 'Todos Response is an array')
        });
    });
 });