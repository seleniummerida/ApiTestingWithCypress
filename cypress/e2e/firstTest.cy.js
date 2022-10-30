describe('TODO api testing', () => {
    let todoItem;
    it('fetches Todo items - GET', () => {
        cy.request('/todos/').as('todoRequest');
        cy.get('@todoRequest').then(todoss => {
            expect(todoss.status).to.eq(200);
            assert.isArray(todoss.body, 'Todos Response is an array')
        });
    });

    it('Adds Todo item - POST', () => {
        cy.request('POST', '/todos/', { task: "run tests" }).as('todoRequest');
        // adds new Todo item by defining Todo name        
        cy.get('@todoRequest').then(todos => {
            expect(todos.status).to.eq(200);
            todoItem = todos.body._id
            cy.wrap(todos.body).should('deep.include', {
                task: 'run tests',
                completed: false,
            });
        });
    });

    
    
    it('deletes Todo items - DELETE', () => {
        cy.request('DELETE', `/todos/${todoItem}`).as('todoRequest');
        // deletes Todo item with id = 9
        cy.get('@todoRequest').then(todos => {
            expect(todos.status).to.eq(200);
            assert.isString(todos.body, 'todo deleted!')
        });
    });

 });

