
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
                allowNull: false,
            },
        });
    }
}