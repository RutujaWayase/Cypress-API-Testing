// Install xml2js library
// npm install xml2js

const xml2js = require('xml2js');
const parser = new xml2js.Parser({explicitArray: false});

/*
XML response send:

<?xml version="1.0" encoding="UTF-8"?>
<Pet>
   <id>0</id>
   <Category>
      <id>0</id>
      <name>Dog</name>
   </Category>
   <name>Jimmy</name>
   <photoUrls>
      <photoUrl>string</photoUrl>
   </photoUrls>
   <tags>
      <Tag>
         <id>0</id>
         <name>string</name>
      </Tag>
   </tags>
   <status>available</status>
</Pet>

*/

describe("XML Parsing", ()=> {
 /*   const xmlPayload="<Pet>
    <id>0</id>
    <Category>
        <id>0</id>
        <name>Dog</name>
    </Category>
    <name>Jimmy</name>
    <photoUrls>
        <photoUrl>string</photoUrl>
    </photoUrls>
    <tags>
        <Tag>
            <id>0</id>
            <name>string</name>
        </Tag>
    </tags>
    <status>available</status>
</Pet>"
*/

const xmlPayload = "<Pet>    <id>0</id>    <Category>       <id>0</id>       <name>Dog</name>    </Category>    <name>Jimmy</name>    <photoUrls>       <photoUrl>string</photoUrl>    </photoUrls>    <tags>       <Tag>          <id>0</id>          <name>string</name>       </Tag>    </tags>    <status>available</status> </Pet>"
let petid = null;
    before("creating PET",() => {
        cy.request({
            method: 'POST',
            url: "https://petstore.swagger.io/v2/pet",
            body: xmlPayload,
            headers: {
                "Content-Type": "application/xml",
                "accept": "application/xml"
            }
        })
        .then((response)=> {
            expect(response.status).to.eq(200);
            //pass the response using parser
            parser.parseString(response.body,(error,result)=> {
                petid = result.Pet.id;
            })
        })
        })
})