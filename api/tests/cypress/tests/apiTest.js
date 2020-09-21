const headers = { Accept: 'application/json' };
let apiResponse;

context('Factorial Tests', () => {
  
    scenario.forEach((test) => {
      it(test.testName, () => {
          cy.request({
            url: `factorial/{4}`,
            method: 'GET',
            headers,
          }).then((response) => {
            expect(response.status).to.eq(200);
            esResponse = response
            cy.log(esResponse);

      });
    });
  });
});