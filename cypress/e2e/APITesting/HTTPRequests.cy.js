describe("HTTP Requests", () => {

    it("GET Call", () => {
        cy.request('GET', 'https://jsonplaceholder.tyicode.com/posts/1')
        .its('status')
        .should('equal', 200);
        
    })

    it("POST Call", () => {
        cy.request({
            method: 'POST',
            url: 'https://jsonplaceholder.tyicode.com/posts/',
            body: {
                title: "Test post",
                body: "This is post call",
                userID: 1
            }

        }
           
        )
        .its('status')
        .should('equal', 201);
    })

    it("PUT Call", () => {
        cy.request({
            method: 'PUT',
            url: 'https://jsonplaceholder.tyicode.com/posts/1',
            body: {
                title: "Test post - Updated",
                body: "This is put call",
                userid: 1,
                id: 1

            }
        })
        .its('status')
        .should('equal', 200);
    })

    it("DELETE Call", () => {
        cy.request({
            method: 'DELETE',
            url: 'https://jsonplaceholder.tyicode.com/posts/',
        })
        .its('status')
        .should('equal', 200);
    })

})