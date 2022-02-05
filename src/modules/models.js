
export default class Models {
    static async DataModel(Sequelize,sequelize) {
        return sequelize.define("data", {
            data_id:{
                type:Sequelize.DataTypes.UUID,
                defaultValue:Sequelize.UUIDV4,
                primaryKey:true
            },
            data_date:{
                type:Sequelize.DataTypes.DATEONLY,
                allowNull: true,
            },
            data_name:{
                type:Sequelize.DataTypes.STRING,
                allowNull: true,
            },
            data_naqd:{
                type:Sequelize.DataTypes.STRING,
                allowNull: true,
            },
            data_terminal:{
                type:Sequelize.DataTypes.STRING,
                allowNull: true,
            },
            data_kelgan:{
                type:Sequelize.DataTypes.STRING,
                allowNull: true,
            },
            data_kunlik:{
                type:Sequelize.DataTypes.STRING,
                allowNull: true,
            },
            data_comment:{
                type:Sequelize.DataTypes.STRING,
                allowNull: true,
            },
        });

    }
    static async UserModel (Sequelize,sequelize) {
        return sequelize.define("user", {
            user_id:{
                type:Sequelize.DataTypes.UUID,
                defaultValue:Sequelize.UUIDV4,
                primaryKey:true
            },
            user_name:{
                type:Sequelize.DataTypes.STRING,
                allowNull: false,
            },
            user_role: {
                type: Sequelize.DataTypes.ENUM,
                values: ["superadmin","qarzdor","ishchi",],
                allowNull: false,
                defaultValue: "qarzdor"
            },
            user_password:{
                type: Sequelize.DataTypes.STRING, 
                allowNull: true,
            },
            user_email: { 
                type: Sequelize.DataTypes.STRING,
                is: /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
                allowNull: true,
                unique: true,
            },
        })
    }
}