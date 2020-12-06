const validator = require('validator');

const invalidFieldMessages = {
    nameLength: ["Enter a name with a minimum length of 2 and a maximum of 100 characters."],
    nameNull: ["Name is required."]
}

module.exports = {

    create(data) {
        let model = {};

        if (data.name != null) {
            data.name = data.name.replace(/(\s)+/g,' ').trim();
            model.nameLength = validator.isLength(data.name, {min: 2, max: 100});
        } else {
            model.nameNull = false;
        }

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

        if (data.name != null) {
            data.name = data.name.replace(/(\s)+/g,' ').trim();
            model.nameLength = validator.isLength(data.name, {min: 2, max: 100});
        } else {
            model.nameNull = false;
        }

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