const express = require("express");
const router  = express.Router();
const carController = require("./../controllers/carsControllers")


// SELECT * FROM cars;


// hanya bisa di akses oleh super admin dan admin tok. 

router.get("/", carController.get);

// SELECT * FROM cars WHERE id={:id};
router.get("/:id",carController.getById)

// INSERT INTO cars (FIELD_1, FIELD_2, dst) VALUES (val_1, val_2, dst)
router.post("/create",carController.post);

// DELETE FROM cars WHERE id={:id};
router.delete("/delete/:id", carController.deleteById);

// UPDATE ....
router.put("/:id", carController.updateById)

module.exports = router;



// kepanjangan query nya. 
// repetitif; 
// too complex