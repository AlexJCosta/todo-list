var request = require("request");
let chai = require('chai');
let chaiHttp = require('chai-http');
var expect = chai.expect;
let should = chai.should();

const config = require('../../config');
const StatusCodes = require('http-status-codes');

chai.use(chaiHttp);
const entityName = "/ToDoItems";
const userID = "dac34c51-8c03-44df-9228-fe76d29f8b0d";
const todoID = "d3521871-252c-494b-97e4-4508e8f513cb";

describe('ToDoItem controller test', () => {

    describe("GET ToDoItem", () => {
        it("GET All", (done) => {
            chai.request(config.api_url).get(entityName).end((err, res) => {
                res.should.have.status(StatusCodes.OK);            
                done();
            });                    
        });
    });

    describe('POST ToDoItem', () => {
        it('POST', (done) => {
            let obj = {
                name: "MY TODO ITEM",
                toDoItemUserId: userID,
                toDoId: todoID            
            }
            
            chai.request(config.api_url).post(entityName).send(obj).end((err, res) => {
                res.should.have.status(StatusCodes.OK);                
                done();
            });
        });
    });       

});