import bcrypt from "../modules/bcrypt.js";
import jwt from "../modules/jwt.js";
import Validations from "../utils/validation.js";

export default class HomeController {
    static async addData(request,respone) {
        try {
            let data = await Validations.DataValidation().validateAsync(request.body)
            console.log(data);
            let data1 = await request.db.data.create({
                data_date:data.data_date,
                data_name:data.data_name,
                data_naqd:data.data_naqd,
                data_terminal:data.data_terminal,
                data_kelgan:data.data_kelgan,
                data_kunlik:data.data_kunlik,
                data_comment:data.data_comment,
            })

            respone.status(200).json({
                ok: true,
                message: 'succes',
                data: data1,
            })
        } catch (error) {
            console.log(error);
            respone.status(400).json({
                ok:false,
                message:error + ""
            })
        }
    }

    static async addQarzdor(request,respone) {
        try {
            let data = await Validations.QarzdorValidation().validateAsync(request.body)

            let data1 = await request.db.users.create({
                user_name:data.user_name,
            })

            respone.status(200).json({
                ok: true,
                message: 'succes',
                data: data1,
            })
        } catch (error) {
            respone.status(400).json({
                ok:false,
                message:error + ""
            })
        }
    }

    static async addXodim(request,respone) {
        try {
            let data = await Validations.QarzdorValidation().validateAsync(request.body)

            let data1 = await request.db.users.create({
                user_name:data.user_name,
                user_role:"ishchi"
            })

            respone.status(200).json({
                ok: true,
                message: 'succes',
                data: data1,
            })
        } catch (error) {
            respone.status(400).json({
                ok:false,
                message:error + ""
            })
        }
    }

    static async addAdmin(request,respone) {
        try {
            let data = await Validations.AdminValidation().validateAsync(request.body)

            let userIsExists = await request.db.users.findOne({
                where:{
                    user_email: `%${data.user_email}%`
                }
            })

            if (userIsExists) throw ("User already exists");

            let data1 = await request.db.users.create({
                user_name:data.user_name,
                user_password:await bcrypt.genHash(data.user_password),
                user_email:data.user_email,
                user_role:"superadmin"
            })

            respone.status(200).json({
                ok: true,
                message: 'succes',
                data: data1,
            })
        } catch (error) {

            if (error === 'SequelizeUniqueConstraintError: Validation error') {
                error = 'This  email is already exists'
            }
            respone.status(400).json({
                ok:false,
                message:error + ""
            })
        }
    }

    static async Login (request,respone) {
        try {
            let data = await Validations.loginValidation().validateAsync(request.body);

            const user = await request.db.users.findOne({
                where:{
                    user_email:data.user_email
                }
            });

            if(!user) throw "User is not exists!";

            const isValid = await bcrypt.compareHash(data.user_password,user.dataValues.user_password )
            if(!isValid) throw "password is incorrect";

            respone.status(200).json({
                ok:true,
                message:"Successfully logged",
                token:await jwt.genToken({
                    id:user.dataValues.user_id
                }),
                data:user.dataValues,
            })
            
        } catch (error) {
            respone.status(400).json({
                ok:false,
                message:error + ""
            })
        }
    }

    static async getData(request,respone) {
        try {
            let data1 = await request.db.data.findAll()

            respone.status(200).json({
                ok: true,
                message: 'succes',
                data: data1,
            })
        } catch (error) {
            respone.status(400).json({
                ok:false,
                message:error + ""
            })
        }
    }
    static async getUsers(request,respone) {
        try {
            let data1 = await request.db.users.findAll()

            respone.status(200).json({
                ok: true,
                message: 'succes',
                data: data1,
            })
        } catch (error) {
            respone.status(400).json({
                ok:false,
                message:error + ""
            })
        }
    }

    static async getDataById(request,respone) {
        try {
            let data1 = await request.db.data.findAll({
                where:{
                    user_id:request.params.id
                }
            })

            respone.status(200).json({
                ok: true,
                message: 'succes',
                data: data1,
            })
        } catch (error) {

            if (error + "".includes('SequelizeDatabaseError: invalid input syntax for type uuid')) {
                error = 'invalid data'
            }
            respone.status(400).json({
                ok:false,
                message:error + ""
            })
        }
    }

    static async editData(request,respone) {
        try {
            let data = await Validations.editValidation().validateAsync(request.body);

            let data1 = await request.db.data.update({
                data_naqd:data.data_naqd,
                data_terminal:data.data_terminal,
                data_kelgan:data.data_kelgan,
                data_kunlik:data.data_kunlik,
                data_comment:data.data_comment,
            }, {
                where:{
                    data_id:data.id
                }
            })

            respone.status(200).json({
                ok: true,
                message: 'succes',
                data: data1,
            })
        } catch (error) {
            respone.status(400).json({
                ok:false,
                message:error + ""
            })
        }
    }

    static async deleteData(request,respone) {
        try {
            let data = await (await Validations.idValidation()).validateAsync(request.body)

            let data1 = await request.db.data.destroy({
                where:{
                    data_id:data.id
                }
            })

            respone.status(200).json({
                ok: true,
                message: 'succes',
                data: data1,
            })
        } catch (error) {
            respone.status(400).json({
                ok:false,
                message:error + ""
            })
        }
    }
}