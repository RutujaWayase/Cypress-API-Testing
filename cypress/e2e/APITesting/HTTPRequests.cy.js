describe("HTTP Requests", () => {

    it("GET Call", () => {
        cy.request('GET', 'https://jsonplaceholder.tyicode.com/posts/1')
        .its('status')
        .should('equal', 200);
        
    })

})