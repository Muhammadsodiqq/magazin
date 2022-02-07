import Express  from "express";
import HomeController from "../controllers/HomeController.js";
import adminMiddleware from "../middlewares/adminMiddleware.js";

const router = Express.Router();

router.post("/add",adminMiddleware, HomeController.addData);
router.post("/add-qarz",adminMiddleware, HomeController.addQarz);
router.post("/add-ish",adminMiddleware, HomeController.addIsh);
router.get("/get",adminMiddleware, HomeController.getData); 
router.get("/get-qarzdor",adminMiddleware, HomeController.getQarzdor);
router.get("/get-ishchi",adminMiddleware, HomeController.getXizmatchi);
router.get("/get/qarz/:id",adminMiddleware, HomeController.getQarzDataById);
router.get("/get/ish/:id",adminMiddleware, HomeController.getIshDataById);
router.post("/edit",adminMiddleware, HomeController.editData);
router.post("/edit-qarz",adminMiddleware, HomeController.editQarz);
router.post("/edit-ish",adminMiddleware, HomeController.editIsh);
router.post("/delete",adminMiddleware, HomeController.deleteData);
router.post("/delete-qarz",adminMiddleware, HomeController.deleteQarz);
router.post("/delete-ish",adminMiddleware, HomeController.deleteish);
router.post("/add-admin", HomeController.addAdmin);
router.post("/login", HomeController.Login);
router.post("/add-qarzdor",adminMiddleware, HomeController.addQarzdor);
router.post("/add-xodim",adminMiddleware, HomeController.addXodim);

export default {
    path:"/",
    router
}