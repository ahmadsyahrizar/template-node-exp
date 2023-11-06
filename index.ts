
const express = require("express").default;
const Express = require("express").Express;
const isAdmin   = require("./src/middleware/isAdmin")
const handleLogger   = require("./src/middleware/handlerLogger")
const carRouter = require("./src/routes/carRouter");
const upload = require("./src/middleware/upload");

const app: Express = express();
const cloudinary = require("cloudinary").v2
const PORT: number = 3000;

cloudinary.config({ 
    cloud_name: 'dvsyg1frc', 
    api_key: '741777918221123', 
    api_secret: '2Dmmo3DeDS5BDC55TanKIWPw0cI' 
  });


// to set up view engine tools using ejs
app.set("view engine", "ejs");

// to custom default views pathname in ejs
app.set("views","./src/views")
app.use(express.static("public"))
app.use(express.urlencoded())
app.use(handleLogger)
// app.use(isAdmin)

app.use("/v1/cars", carRouter);
app.post("/v1/cars/picture", upload.single("picture"), (req, res)=> {
    const filebase64 = req.file.buffer.toString("base64");
    const file = `data:${req.file.mimetype};base64,${filebase64}`

    cloudinary.uploader.upload(file, (err, result)=> {
        if(err){
            return res.status(400).json({
                message: err.message, 
            })
        }

        res.status(201).json({
            message: "Upload success", 
            url: result.url
        })
    })
})


app.listen(PORT, ()=> {
    console.log(`is listening to port ${PORT}`)
} )