let chai = require('chai');
let chaiHttp = require('chai-http');

const config = require('../../config');
const StatusCodes = require('http-status-codes');

chai.use(chaiHttp);

describe('Server test', () => {

    describe("Status", () => {
        it("Status serve", (done) => {
            chai.request(config.api_url).get('/users').end((err, res) => {
                res.should.have.status(StatusCodes.OK);            
                done();
            });                    
        });
    });
});