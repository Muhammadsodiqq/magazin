import Validations from "../utils/validation.js";

export default class HomeController {
    static async addData(request,respone) {
        try {
            let data = await Validations.DataValidation().validateAsync(request.body)

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

    static async editData(request,respone) {
        try {
            let data = await Validations.editValidation().validateAsync(request.body);

            let data1 = await request.db.data.update({
                data_naqd:data.data_naqd,
                data_terminal:data.data_terminal,
                data_kelgan:data.data_kelgan,
                data_kunlik:data.data_kunlik,
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