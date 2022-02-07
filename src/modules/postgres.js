import {Sequelize} from "sequelize";
import config from "../config.js";
import Models from "./models.js";

const sequelize  = new Sequelize(config.DB_STRING, {
    logging:true
})

async function data () {
    try {
        let db = {};
        db.users = await Models.UserModel(Sequelize,sequelize)
        db.data = await Models.DataModel(Sequelize,sequelize)
        db.qarzdor = await Models.QarzdorModel(Sequelize,sequelize)
        db.qarz = await Models.QarzModel(Sequelize,sequelize)
        db.ishchi = await Models.XizmatchiModel(Sequelize,sequelize)
        db.ish = await Models.XizmatModel(Sequelize,sequelize)


        await db.qarzdor.hasMany(db.qarz,{
            foreignKey:{
              name:"user_id",
              allowNull:true
            }
          })
      
          await db.qarz.belongsTo(db.qarzdor, {
            foreignKey: {
                name: "user_id",
                allowNull: false
            }
        })

        await db.ishchi.hasMany(db.ish,{
            foreignKey:{
              name:"user_id",
              allowNull:true
            }
          })
      
          await db.ish.belongsTo(db.ishchi, {
            foreignKey: {
                name: "user_id",
                allowNull: false
            }
        })

        // await sequelize.sync({alter:true})

        return db;
    } catch (error) {
        console.error('Unable to connect to the database:', error);
    }
}

export default data;