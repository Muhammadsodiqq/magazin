import dotenv from "dotenv";

dotenv.config();

export default {
    PORT:process.env.PORT,
    DB_STRING:process.env.DB_STRING
}