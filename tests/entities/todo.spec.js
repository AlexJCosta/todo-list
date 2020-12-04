var request = require("request");
let chai = require('chai');
let chaiHttp = require('chai-http');
var expect = chai.expect;
let should = chai.should();

const config = require('../../config');
const StatusCodes = require('http-status-codes');

chai.use(chaiHttp);
const entityName = "/toDos";
const userID = "772ccc7e-ab3b-437a-9b92-680a829cb951";

describe('ToDo controller test', () => {

    describe("GET ToDos", () => {
        it("GET All", (done) => {
            chai.request(config.api_url).get(entityName).end((err, res) => {
                res.should.have.status(StatusCodes.OK);            
                done();
            });                    
        });

        it("GET All By User ID", (done) => {
            chai.request(config.api_url).get(entityName + '/user/' + userID).end((err, res) => {
                res.should.have.status(StatusCodes.OK);            
                done();
            });                    
        });
    });

    describe('POST ToDo', () => {
        it('POST', (done) => {
            let obj = {
                name: "MY TODO LIST",
                toDoUserId: userID             
            }
            
            chai.request(config.api_url).post(entityName).send(obj).end((err, res) => {
                res.should.have.status(StatusCodes.OK);                
                done();
            });
        });
    });       

});