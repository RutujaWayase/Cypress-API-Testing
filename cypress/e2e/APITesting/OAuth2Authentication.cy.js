//Pre-requisite: generate Auth code
//https://github.com/login/auth/authorize/{client_id}

/*
1) Get the OAuth2 access token
POST: https://github.com/login/oauth/access_token
Query params 
      _ _ _
      client_id
      client_secret
      code

2) Send GET request by using access token.
https://api.github.com/user/repos
Auth: accessToken

*/

describe("OAuth2", ()=> {

    const accessToken = "";
    it("get Oath2 access token", () => {
        cy.request({
            method: 'POST',
            url: 'https://github.com/login/oauth/access_token',
            qs: {
                client_id: '',
                client_secret: '',
                code: ''
            }
        })
        .then((response) => {
            //accesstoken
            const params = response.body.split('&');
            accessToken = params[0].split("=")[1];


        })

        it("OAuth2 request", () => {
            cy.request({
                method:'GET',
                url: 'https://api.github.com/user/repos',
                headers:{
                    Autherization: "Bearer"+accessToken
                }
            })
            .then((response) => {
                expect(response.status).to.eq(200);
                expect(response.body[0].id).to.equal(201070920);

            })
        } )
    })
})