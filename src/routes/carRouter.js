const express = require("express");
const router  = express.Router();
const carController = require("./../controllers/carsControllers")

router.get("/", carController.get);
router.get("/:id",carController.getById)
router.post("/create",carController.post);

module.exports = router;