describe('My First Test', () => {
   
    it('Do check out!', () => {
     cy.clearCookies()
     cy.clearLocalStorage()
     cy.visit('https://us.pandora.net/');
     cy.title().should('include', 'Shop 2020 Pandora Jewelry - Charms, Bracelets and Rings | Pandora US')
     cy.contains("I'm fine with this").click()
     cy.get('.Icon__search').first().click()
     cy.get('input#q').type('charms{enter}')
     cy.get('a[title="Our Blue Planet Dangle Charm"]').first().click()
     cy.get('div.addToCartButtonBox.sticky-addtocart-wishlist.find-in-store-enabled div.cartbuttonDiv')
       .contains('Add to Bag').click() 
     cy.wait(1000)
     cy.get('div.Header__cta.cart-inner-wrapper').click()
     cy.wait(1000)
     cy.get('div.form-wrapper-null.asset-wrapper a span')
       .scrollIntoView().contains('Checkout').click()
     
  
    });
  })

