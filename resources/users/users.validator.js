const validator = require('validator');


const invalidFieldMessages = {
    nameLength: ["Enter a name with a minimum length of 2 and a maximum of 100 characters."],
    nameNull: ["Name is required."],
    passwordLength: ["Enter a password with a minimum length of 4 and a maximum of 10 characters."],
    passwordNull: ["Password is required."],
    emailIsEmail: ["Email is invalid."],
    emailNull: ["Email is required."]
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

        if (data.password != null) {
            data.password = data.password.replace(/(\s)+/g,' ').trim();
            model.passwordLength = validator.isLength(data.password, {min: 4, max: 10});
        } else {
            model.passwordNull = false;
        }

        if (data.email != null) {
            data.email = data.email.replace(/(\s)+/g,' ').trim();
            model.emailIsEmail = validator.isEmail(data.email);
        } else {
            model.emailNull = false;
        }

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

        if (data.name != null) {
            data.name = data.name.replace(/(\s)+/g,' ').trim();
            model.nameLength = validator.isLength(data.name, {min: 2, max: 100});
        } else {
            model.nameNull = false;
        }

        if (data.password != null) {
            data.password = data.password.replace(/(\s)+/g,' ').trim();
            model.passwordLength = validator.isLength(data.password, {min: 4, max: 10});
        } else {
            model.passwordNull = false;
        }

        if (data.email != null) {
            data.email = data.email.replace(/(\s)+/g,' ').trim();
            model.emailIsEmail = validator.isEmail(data.email);
        } else {
            model.emailNull = false;
        }

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

        if (data.password != null) {
            data.password = data.password.replace(/(\s)+/g,' ').trim();
            model.passwordLength = validator.isLength(data.password, {min: 4, max: 10});
        } else {
            model.passwordNull = false;
        }

        if (data.email != null) {
            data.email = data.email.replace(/(\s)+/g,' ').trim();
            model.emailIsEmail = validator.isEmail(data.email);
        } else {
            model.emailNull = false;
        }

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