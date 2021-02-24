import { apiUrl } from '../../src/config';

describe('Warehouse app ', function () {
    describe('front page ', function () {
        beforeEach(function () {
            cy.visit('http://localhost:3000');
        });

        it('can be opened', () => {
            cy.contains('Products');
            cy.contains('Select a product category.');
        });


        it('contains functioning navbar', function () {
            cy.contains('Gloves').click();
            cy.contains('Loading');
        });
    });

    describe('gloves page ', function () {
        it('can be loaded', function () {
            cy.intercept('GET', `https://salty-gorge-61248.herokuapp.com/${apiUrl}/products/gloves`).as('glovesRoute');
            cy.visit('http://localhost:3000');
            cy.contains('Gloves').click();
            cy.wait('@glovesRoute');
            cy.get('[data-cy=products-loading]').should('not.exist');
            cy.contains("Name");
            cy.contains("Color");
            cy.contains("Price");
            cy.contains("Manufacturer");
            cy.contains("Availability");
            cy.contains("hennex");
        });
    });

    // this might fail if hennex responds first but gives invalid data back.. ?
    describe('gloves products get their availability data', function () {
        it('can be loaded', function () {
            cy.intercept('GET', `https://salty-gorge-61248.herokuapp.com/${apiUrl}/availability/hennex`).as('hennexRoute');
            cy.visit('http://localhost:3000');
            cy.contains('Gloves').click();
            cy.wait('@hennexRoute');
            cy.contains("In Stock");
        });
    });

});