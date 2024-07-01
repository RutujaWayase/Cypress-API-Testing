describe("Authentication", () => {
    it("Basic Authentication", () => {
        cy.request({
            method: 'GET',
            url: 'https://postman-echo.com/basic-auth',
            auth:{
                user: 'postman',
                pass: 'password'
            }
        })
        .then((response) => {
            expect(response.status).to.equal(200)
            expect(response.body.authenticated).to.eq(true);
        });
    });


    it("Digest Authentication", () => {
        cy.request({
            method: 'GET',
            url: 'https://postman-echo.com/basic-auth',
            auth:{
                username: 'postman',
                password: 'password',
                method: 'digest'
            }
        })
        .then((response) => {
            expect(response.status).to.equal(200)
            expect(response.body.authenticated).to.eq(true);
        });
    });

    it("Basic Authentication", () => {
        cy.request({
            method: 'GET',
            url: 'https://postman-echo.com/basic-auth',
            auth:{
                user: 'postman',
                pass: 'password'
            }
        })
        .then((response) => {
            expect(response.status).to.equal(200)
            expect(response.body.authenticated).to.eq(true);
        });
    });


    const token =  'access token value'
     //"ghp......"

    it("Barer Token Authentication", () => {
        cy.request({
            method: 'GET',
            url: 'https://api.github.com/user/repos',
            headers: {
                Authorization: 'Bearer' + token
            }

        })
        .then((response) => {
            expect(response.status).to.eq(200)
        });
    });

    it("API key Authentication",() => {

        cy.request({
            method: 'GET',
            url: 'api.openweathermap.org/data/2.5/forecast/daily?q=Delhi',
            qs:{
                appid: 'Fv' //API key and value
    
            }
            
        })
    
})
})


/*
describe("Authentication", () => {
    it("Basic Authentication", () => {
        cy.request({
            method: 'GET',
            url: 'https://postman-echo.com/basic-auth',
            auth:{
                user: 'postman',
                pass: 'password'
            }
        })
        .then((response) => {
            expect(response.status).to.equal(200)
            expect(response.body.authenticated).to.eq(true);
        });
    });


    it("Digest Authentication", () => {
        cy.request({
            method: 'GET',
            url: 'https://postman-echo.com/basic-auth',
            auth:{
                username: 'postman',
                password: 'password',
                method: 'digest'
            }
        })
        .then((response) => {
            expect(response.status).to.equal(200)
            expect(response.body.authenticated).to.eq(true);
        });
    });

    it("Basic Authentication", () => {
        cy.request({
            method: 'GET',
            url: 'https://postman-echo.com/basic-auth',
            auth:{
                user: 'postman',
                pass: 'password'
            }
        })
        .then((response) => {
            expect(response.status).to.equal(200)
            expect(response.body.authenticated).to.eq(true);
        });
    });


    const token = "ghp..."

    it("Barer Token Authentication", () => {
        cy.request({
            method: 'GET',
            url: 'https://api.github.com/user/repos',
            headers: {
                Authorization: 'Bearer' + token
            }

        })
        .then((response) => {
            expect(response.status).to.eq(200)
        });
    });

    it("API key Authentication",() => {

        cy.request({
            method: 'GET',
            url: 'api.openweathermap.org/data/2.5/forecast/daily?q=Delhi',
            qs:{
                appid: 'Fv' //API key and value
    
            }
            
        })
    
})
})
*/

