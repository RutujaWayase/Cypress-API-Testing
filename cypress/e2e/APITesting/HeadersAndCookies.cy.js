//run on cli/terminal : 
// Headless mode: npx cypress run --spec cypress\e2e\APITesting\HeadersAndCookies.cy.js 
// Headed mode: npx cypress open


describe("API testing", () => {
    let authToken = null;

    before("creating access token", () => {
        cy.request({
            method: 'POST',
            url: 'https://simple-books-api.glitch.me/api-clients/',
            headers: {
                'Content-Type': 'application/json'
            },
            body: {
                clientName: 'John',
                clientEmail: Math.random().toString(5).substring(2)+ "@gmail.com"
            }
        }).then((response) => {
            authToken = response.body.accessToken;
        });
    });

    //creating order

    // before("creating new order", () => {
    it("creating new order", () => {
        cy.request({
            method: 'POST',
            url: 'https://simple-books-api.glitch.me/orders/',
            headers: {

                'Content-Type': 'application/json',
                'Authorization': 'Barer' + authToken

            },
            body: {

                "bookId": 1,
                "customerName": "xyzabc"
            }
        }).then((response) => {
           expect(response.status).to.eq(201);
           expect(response.body.created).to.eq(true);
        });
    });

    //fetch all orders from database
    it("Fetching orders", () => {
        cy.request({
            method: 'GET',
            url: 'https://simple-books-api.glitch.me/orders/',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': 'Bearer' + authToken

            },
            cookies: {
                'cookieName': 'mycookie'
            }
        }).then((response)=> {
            expect(response.status).to.eq(200);
            expect(response.body).has.length(1); //calculating/verifing the order 
        });
    });
})