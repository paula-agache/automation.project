describe ('TC', () => {
  it('passes', () => {
    cy.visit('https://iwanttohelp.bim.assistcloud.services');
   
  })
  describe('TC4', () => {
  it ('create a new user', () => {
    cy.visit ("https://iwanttohelp.bim.assistcloud.services/auth/register");
    cy.get ('#__BVID__28').type('Paula');
    cy.get('#__BVID__30').type('Agache');
    cy.get('#__BVID__32').type('0755704504');
    cy.get('#__BVID__34').type('agachep@icloud.com');
    //cy.get('.vs__selected-options').type('ONG')
    cy.get('#__BVID__41').type('Lalelor');
    cy.get('#__BVID__43').type('Nr.8');
    cy.get('#__BVID__45').type('Suceava');
    cy.get('#__BVID__47').type('Suceava');
    cy.get('#__BVID__49').type('727602');
    cy.get('#__BVID__51').type('123456');
    cy.get('#__BVID__53').type('123456');
    cy.contains('Inregistrare').click();
  })
  })
  })

  describe('TC1', () => {
    it('should navigate to the correct page when a navbar link is clicked', () => {
      // Visit the home page
      cy.visit('https://iwanttohelp.bim.assistcloud.services');
      cy.get('.nav-link')
        .should('be.visible')
        .and('contain', 'acasa');
      cy.visit('https://iwanttohelp.bim.assistcloud.services/search');
      cy.get('.nav-link')
            .should('be.visible')
            .and('contain', ' Top voluntari ');
        cy.visit('https://iwanttohelp.bim.assistcloud.services/needs_list');
      cy.get('.nav-link')
        .should('be.visible')
        .and('contain', 'Lista nevoi'); 
      cy.visit('https://iwanttohelp.bim.assistcloud.services/about');
      cy.get('.nav-link')
          .should('be.visible')
          .and('contain', 'Despre noi');
      cy.visit('https://iwanttohelp.bim.assistcloud.services/contact');
      cy.get('.nav-link')
              .should('be.visible')
              .and('contain', 'Ofera Sugestie');
      cy.visit('https://iwanttohelp.bim.assistcloud.services/auth/register');
      cy.get('.nav-link')
              .should('be.visible')
              .and('contain', 'Devino voluntar');
      cy.visit('https://iwanttohelp.bim.assistcloud.services/auth/login');
      cy.get('.nav-link')
          .should('be.visible')
          .and('contain', ' Autentificare ');
    });
  });
  describe('TC2', () => {
    it('should navigate to the correct page when a navbar link is clicked', () => {
      // Visit the home page
      cy.visit('https://iwanttohelp.bim.assistcloud.services/search');
      cy.get('.nav-link')
        .should('be.visible')
        .and('contain', 'Top voluntari');
    })
  })
  describe('TC5', () => {
    it ('Login work with invalid credentials', () => {
      cy.visit('https://iwanttohelp.bim.assistcloud.services/auth/login');
      cy.get("#__BVID__91").type("0755685849");
    })
  })

  

    