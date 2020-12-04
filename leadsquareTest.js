describe('My First Test', () => {
   
    it('Do check out!', () => {
     cy.clearCookies()
     cy.clearLocalStorage()

     cy.visit('/LeadManagement')

     cy.get('input#EmailID').type('suma.prod13200@lsqdev.in')
     cy.get('div button.btn-primary.btn.lsq-signin-button').click()

     cy.get('input#Password').type('Qwerty@1') 
     cy.get('div button.btn-primary.btn.lsq-signin-button').click()

     cy.wait(2000)
   //cy.get('div.cico-skip').click()
    
    cy.get('span.medium.semi-bold.collapse-class').eq(1).click()
    cy.wait(2000)

    cy.get('div.flag-dropdown div.arrow').click()
    cy.contains('Australia').click()
    cy.get('input#Phone + input.number-input').type('8698717476')

    cy.get('div.entity-control>select#mx_Dep_Parent + span').click().type('2000-3000{enter}')

    cy.get('input[fieldid="mx_DateTime"]').first().clear().type("11/11/2020")
    cy.get('input[fieldid="mx_DateTime"]').last().clear().type("12:00 PM")

    cy.get('div.entity-control>select#mx_DropdownFieldSw + span a[title="Show All Items"]').click().type('2 Sharing starts @ 5000')
    cy.get('select#mx_DropdownFieldSw + span input[placeholder="Type to Search"] +span +ul>li.ui-menu-item')
      .click()

    cy.get('div.entity-control>select#mx_Dropdown12 + span').click().type('000)1 Sharing (starts @ 4')
    cy.get('select#mx_Dropdown12 + span input[placeholder="Type to Search"] +span +ul>li.ui-menu-item')
      .click() 
    
    cy.get('div#account-type-wrapper>select#AccountTypeFilter + span a#AccountTypeFilter-button').click()
    cy.get('div.ui-selectmenu-menu.ui-selectmenu-open>ul').find('li>a').eq(8).click()
    cy.get('div[title="Select Account"]').click()
  
    });
  })

