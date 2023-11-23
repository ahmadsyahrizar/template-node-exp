//@ts-ignore
const express = require("express");
//@ts-ignore
const router = express.Router();
const userController = require("./../controllers/usersController");

router.put("/admin/add", userController.isSuperAdmin, userController.editRoleToAdmin) // role superadmin

router.get("/userProfile", userController.authorization,userController.getUserProfile) // semua role
router.post("/register", userController.register); // => Semua role , default role  = member;
router.post("/login", userController.login); // => semua role 


module.exports = router;