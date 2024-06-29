const { expect } = require("chai")

describe("API testing", () => {
    it("Approach 1: Hard coded json object", () => {

        const requestBody = {
            tourist_name: "John1",
            tourist_email: "john1@gmail.com",
            tourist_loction: "UK"
        }

        cypress.request({
            method: 'POST',
            url: 'http://restapi.adequateshop.com/api/Tourist',
            body: requestBody
        })
        .then((response) => {
            expect(response.status).to.equal(201)
            expect(response.body.tourist_name).to.eq("John")
            expect(response.body.tourist_email).to.eq("John@gmail.com")
            expect(response.requestBody.tourist_loction).to.eq("UK")
        })
    })

    it("Approach 2: Dynamically generating json object", () => {
        const requestBody ={
            tourist_name: Math.random().toString(5).substring(2), //we accept string i.e. name with 5 characters and 2 words
            tourist_email: Math.random().toString(5).substring(2) + "@gmail.com",
            tourist_loction: Math.random().toString(5).substring(2)
        }
        cypress.request({
            method: 'POST',
            url: '',
            body: requestBody
        })
        .then((reponse) => {
            expect(reponse.status).to.eq(201)
            expect(reponse.requestBody.tourist_name).to.eq(requestBody.tourist_name)
            expect(response.requestBody.tourist_email).to.eq(requestBody.tourist_email)
            expect(response.requestBody.tourist_loction).to.eq(requestBody.tourist_loction)
        })
    })

    it.only("Approach 3: using Fixture", () => {

        cy.fixtures('tourist').then((data) => {
            const requestBody=data;

            cy.request({
                method: 'POST',
                url: 'http://restapi.adequateshop.com/api/Tourist',
                body: requestBody
            })
            .then((response) => {
                expect(response.status).to.eq(201)
                expect(response.body.tourist_name).to.eq(requestBody.tourist_name)
                expect(response.body.tourist_email).to.eq(requestBody.tourist_email)
                expect(response.body.tourist_loction).to.eq(requestBody.tourist_loction)

                expect(response.body).has.property('tourist_email', requestBody.tourist_email)
                expect(response.body).to.have.property('tourist_email', requestBody.tourist_email)
            })
        })
    })
})