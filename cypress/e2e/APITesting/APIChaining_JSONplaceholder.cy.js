describe("API chaining", () => {

    it("Getting all the posts", () => {
        cy.request({
            method: 'GET',
            url: 'https://jsonplaceholder.typicode.com/posts'
        })
        .then((response) => {
            expect(response.status).to.eq(200)
            const postid = response.body[0].id
            return postid
        })
        .then((postid) => {
            cy.request({
                method: 'GET',
                url: 'https://jsonplaceholder.typicode.com/comments?postId=${postid)' //specify url with query parameter
                
            })
            .then((response) => {
                expect(response.status).to.eq(200)
                expect(response.body).to.have.length(5)
            })
        })
    })
})