describe('My First Test', () => {

    it('Should open single image page', () => {
        cy
            .visit('/')
            .get('.card:first')
            .find('button.btn')
            .first()
            .should('contain', 'View')
            .click()
            .url()
            .should('include', '/image/1');
    });

    it('Should open application`s main page', () => {
        cy
            .visit('/image/1')
            .contains('Album')
            .click()
            .url()
            .should('include', '/');
    });

    it('Should open editor in same window', () => {
        cy
            .visit('/')
            .get('.card:first')
            .find('button.btn:last')
            .first()
            .should('contain', 'Edit')
            .click()
            .url()
            .should('equal', 'http://localhost:3000/')
            .get('.modal-dialog')
            .find('h2')
            .should('contain', 'accusamus beatae ad facilis cum similique qui sunt')
            
    });

    it('Should open page with map', () => {
        cy
            .visit('/')
            .get('.navbar-toggler')
            .click()
            .get('.collapse')
            .should('have.class', 'show')
            .get('.navbar')
            .find('a[href="/map"]')
            .click()
            .url()
            .should('include', '/map')
            .get('.leaflet-container')
            .should(($mapContaiter) => {
                expect($mapContaiter.children).to.have.length(2)
            })
    });

    it('Should scroll to top of the page', () => {
        cy
            .visit('/')
            .scrollTo(0, 500) 
            .get('footer')
            .find('.btn.btn-link')
            .click()
            .window()
            .should(($window) => {
                expect(window.pageYOffset).to.eq(0);
            })
    })
});