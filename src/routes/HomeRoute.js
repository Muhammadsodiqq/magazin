import Express  from "express";
import HomeController from "../controllers/HomeController.js";
import adminMiddleware from "../middlewares/adminMiddleware.js";

const router = Express.Router();

router.post("/add",adminMiddleware, HomeController.addData);
router.get("/get",adminMiddleware, HomeController.getData);
router.get("/get-users",adminMiddleware, HomeController.getUsers);
router.get("/get/:id",adminMiddleware, HomeController.getDataById);
router.post("/edit",adminMiddleware, HomeController.editData);
router.post("/delete",adminMiddleware, HomeController.deleteData);
router.post("/add-admin", HomeController.addAdmin);
router.post("/login", HomeController.Login);
router.post("/add-qarzdor",adminMiddleware, HomeController.addQarzdor);
router.post("/add-xodim",adminMiddleware, HomeController.addXodim);

export default {
    path:"/",
    router
}