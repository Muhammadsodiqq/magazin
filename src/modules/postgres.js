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
        await sequelize.authenticate();


        // await db.users.hasMany(db.data,{
        //     foreignKey:{
        //       name:"user_id",
        //       allowNull:true
        //     }
        //   })
      
        //   await db.data.belongsTo(db.users, {
        //     foreignKey: {
        //         name: "user_id",
        //         allowNull: false
        //     }
        // })

        await sequelize.sync({force:true})

        return db;
    } catch (error) {
        console.error('Unable to connect to the database:', error);
    }
}

export default data;