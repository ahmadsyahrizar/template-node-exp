const express = require("express");
const isAdmin   = require("./src/middleware/isAdmin")
const handleLogger   = require("./src/middleware/handlerLogger")
const carRouter = require("./src/routes/carRouter");
const upload = require("./src/middleware/upload");
const app = express();
const PORT = 3000;


// to set up view engine tools using ejs
app.set("view engine", "ejs");

// to custom default views pathname in ejs
app.set("views","./src/views")
app.use(express.static("public"))
app.use(express.urlencoded())
app.use(handleLogger)
// app.use(isAdmin)

app.use("/v1/cars", carRouter);
app.put("/v1/cars/:id/picture", upload.single("picture"), (req, res)=> {
    const url = `/uploads/${req.file.filename}`;

    res.status(200).json({message: "photo successfully uploaded!", url})
})


app.listen(PORT, ()=> {
    console.log(`is listening to port ${PORT}`)
} )