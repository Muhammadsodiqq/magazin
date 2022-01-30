import Express from "express";
import Cors from "cors";
import Morgan from "morgan";
import Helmet from "helmet";
import Path from "path";
import http from "http";
import config from "./config.js"
import routes from "./routes/routes.js"
import data from "./modules/postgres.js"
async function main () {
    const app = Express()
    const server = http.createServer(app)
    let db = await data();
    //dirname
    const __dirname = Path.resolve(Path.dirname(""));

    //middlewares
    app.use(Express.json());
    app.use(Express.urlencoded({extended:true}));
    app.use(Cors());
    app.use(Helmet());
    app.use(Morgan("dev"));
    app.use(async function (req,res,next) {
        req.db = db
        next()
    })
    //routes
    routes(app)

    //server run
    server.listen(config.PORT, _=> console.log("SERVER READY at http://localhost:" + config.PORT))
}

main()