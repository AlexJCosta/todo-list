const validator = require('validator');
const { update } = require('./toDo.controller');


const invalidFieldMessages = {}

module.exports = {

    create(data) {
        let model = {};

        let isValid = true;
        let invalidFields = [];
        let errors = [];

        for(let att in model){
            isValid = isValid && model[att];

            if(!model[att]){
                invalidFields.push(att);
                errors.push(invalidFieldMessages[att]);
            }
        }

        return { isValid, errors };
    },

    update(data) {
        let model = {};

        let isValid = true;
        let invalidFields = [];
        let errors = [];

        for(let att in model){
            isValid = isValid && model[att];

            if(!model[att]){
                invalidFields.push(att);
                errors.push(invalidFieldMessages[att]);
            }
        }

        return { isValid, errors };

    }    
}