describe("Passing JSON Response", () => {

    it("Passing simple JSON Response", () => {
        cy.request({
            method: 'GET',
            url: "https://fakestoreapi.com/products",
        })
        .then((response) => {
            expect(response.status).to.eq(200)
            expect(response.body[0].id).to.equal(1) 
            //expect(response.body[0].title).to.equal("Fjallraven - Foldscack No. 1 Backpack, Fits 15 Laptops")
            expect(response.body[0].price).to.equal(109.95)
            //expect(response.body[0].rating.raate).to.equal(3.9)

            expect(response.body[19].id).to.eq(20)
            expect(response.body[19].price).to.equal(12.99)
            expect(response.body[19].rating.rate).to.equal(3.6)

        })
    })

    //retrive price of all the products and find total price of all
    it("Passing complex JSON response", () => {
        
        let totalprice = 0;

        cy.request({
            method: 'GET',
            url: 'https://fakestoreapi.com/products',
            //qs: {limit: 5} //passing query parameter as limit 5
            qs: {limit:3}
        })
        .then((response) => {
            expect(response.status).to.equal(200)
            response.body.forEach(element => {
                
                totalprice = totalprice + element.price;

            });
            //expect((totalprice).to.equal(899.23)); //for limit 5 products //value will differ as per limits under consideration.
            expect(totalprice).to.equal(188.24); //limit = 3





        });
    });

})

/*
Run using command:
1) Headed mode: npx cypress open
2) Headless mode: npx cypress run --spec cypress\e2e\APITesting\PassingJSONResponse.cy.js
*/
