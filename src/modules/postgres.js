import {Sequelize} from "sequelize";
import config from "../config.js";
import Models from "./models.js";

const sequelize  = new Sequelize(config.DB_STRING)

async function data () {
    try {
        let db = {};
        db.data = await Models.DataModel(Sequelize,sequelize)
        await sequelize.authenticate();

        // await sequelize.sync({force:true})


        return db;
    } catch (error) {
        console.error('Unable to connect to the database:', error);
    }
}

export default data;