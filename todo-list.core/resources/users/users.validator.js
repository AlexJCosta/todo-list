const validator = require('validator');
const { update } = require('./users.controller');


const invalidFieldMessages = {}

module.exports = {

    create(data) {
        let model = {};

        let isValidUser = true;
        let invalidFieldsUser = [];
        let errorsUser = [];

        for(let att in model){
            isValidUser = isValidUser && model[att];

            if(!model[att]){
                invalidFieldsUser.push(att);
                errorsUser.push(invalidFieldMessages[att]);
            }
        }

        return { isValidUser, errorsUser };
    },

    update(data) {
        let model = {};

        let isValidUser = true;
        let invalidFieldsUser = [];
        let errorsUser = [];

        for(let att in model){
            isValidUser = isValidUser && model[att];

            if(!model[att]){
                invalidFieldsUser.push(att);
                errorsUser.push(invalidFieldMessages[att]);
            }
        }

        return { isValidUser, errorsUser };

    },

    login(data) {
        let model = {};

        let isValidUser = true;
        let invalidFieldsUser = [];
        let errorsUser = [];

        for(let att in model){
            isValidUser = isValidUser && model[att];

            if(!model[att]){
                invalidFieldsUser.push(att);
                errorsUser.push(invalidFieldMessages[att]);
            }
        }

        return { isValidUser, errorsUser };
    }
}