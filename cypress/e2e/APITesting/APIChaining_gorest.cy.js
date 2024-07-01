/*
POST https://gorest.co.in/public/v2/users
PUT https://gorest.co.in/public/v2/users/${userId}
DELETE https://gorest.co.in/public/v2/users${userId}
*/


describe("Gorest API chaining", () => {
    const auth_token = 'Bearer c35e10....'
    it("create, update, delete user in Gorest API", () => {

        cy.request({
            method: 'POST',
            url: 'https://gorest.co.in/public/v2/users',
            body: {
                name: 'John',
                gender: 'male',
                email: Math.random().toString(5).substring(2)+"@gmail.com",
                status: 'active'

            },
            headers:{
                Authorization: auth_token
            }
        })
        .then((resonse) => {
            expect(response.status).to.equal(201)
            const userId = response.body.id
            //Update user name
            cy.request({
                method: 'PUT',
                url: `https://gorest.co.in/public/v2/users/${userId}`,
            })

        })

    })
})