import Express  from "express";
import HomeController from "../controllers/HomeController.js";

const router = Express.Router();

router.post("/add", HomeController.addData);
router.get("/get", HomeController.getData);
router.post("/edit", HomeController.editData);
router.post("/delete", HomeController.deleteData);

export default {
    path:"/",
    router
}