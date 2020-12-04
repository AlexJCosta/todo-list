var request = require("request");
let chai = require('chai');
let chaiHttp = require('chai-http');
var expect = chai.expect;
let should = chai.should();

const config = require('../../config');
const StatusCodes = require('http-status-codes');

chai.use(chaiHttp);
const entityName = "/users";

describe('User controller test', () => {

    describe("GET Users", () => {
        it("GET All", (done) => {
            chai.request(config.api_url).get(entityName).end((err, res) => {
                res.should.have.status(StatusCodes.OK);            
                done();
            });                    
        });
    });

    describe('POST User', () => {
        it('POST', (done) => {
            let obj = {
                name: "Alex Costa", 
                email: "alex@wmail.com",
                password: "test321123"
            }
            
            chai.request(config.api_url).post(entityName).send(obj).end((err, res) => {
                res.should.have.status(StatusCodes.OK);                
                done();
            });
        });
    });       
       
});