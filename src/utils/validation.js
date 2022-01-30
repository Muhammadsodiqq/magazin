import Joi from "joi";

export default class Validations {
    static DataValidation () {
        return Joi.object({
            data_date:Joi.date()
                .required()
                .error(Error("date is invalid")),
            data_name:Joi.string()
                .required()
                .error(Error("name is invalid")),
            data_naqd:Joi.number()
                .required()
                .error(Error("naqd is invalid")),
            data_terminal:Joi.number()
                .required()
                .error(Error("terminal is invalid")),
            data_kelgan:Joi.number()
                .required()
                .error(Error("kelgan is invalid")),
            data_kunlik:Joi.number()
                .required()
                .error(Error("kunlik is invalid")),
            data_comment:Joi.string()
                .error(Error("comment is invalid")),
        })
    }

    static editValidation () {
        return Joi.object({
            id:Joi.string()
                .required()
                .error(Error("invalid id")),
            data_naqd:Joi.number()
                .required()
                .error(Error("naqd is invalid")),
            data_terminal:Joi.number()
                .required()
                .error(Error("terminal is invalid")),
            data_kelgan:Joi.number()
                .required()
                .error(Error("kelgan is invalid")),
            data_kunlik:Joi.number()
                .required()
                .error(Error("kunlik is invalid")),
        })
    }

    static async idValidation() {
        return Joi.object({
            id:Joi.string()
                .required()
                .error(Error("invalid id"))
        })
    }
}