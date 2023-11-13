const {Model} = require("objection");
const knex = require("knex")
const expressjs = require("express");
const ExpressT = require("express").Express;
const isAdmin   = require("./src/middleware/isAdmin")
const handleLogger   = require("./src/middleware/handlerLogger")
const carRouter = require("./src/routes/carRouter");
const upload = require("./src/middleware/upload");

//@ts-ignore
const app: Express = expressjs();
const cloudinary = require("cloudinary").v2
const knexInstance = knex({
    client: "postgresql",
    connection: {
      database: "binar_chapter_5", 
      user: "admin", 
      password: "123456"
      // filename: "./dev.sqlite3"
    }
})

const PORT: number = 3000;

Model.knex(knexInstance)
cloudinary.config({ 
    cloud_name: 'dvsyg1frc', 
    api_key: '741777918221123', 
    api_secret: '2Dmmo3DeDS5BDC55TanKIWPw0cI' 
  });


// to set up view engine tools using ejs
app.set("view engine", "ejs");

// to custom default views pathname in ejs
app.set("views","./src/views")
app.use(expressjs.static("public"))
app.use(expressjs.urlencoded())
app.use(handleLogger)
// app.use(isAdmin)

// separation of concern;
app.use("/v1/cars", carRouter);

//@ts-ignore
app.post("/v1/cars/picture", upload.single("picture"), (req, res)=> {
    const filebase64 = req.file.buffer.toString("base64");
    const file = `data:${req.file.mimetype};base64,${filebase64}`

    //@ts-ignore
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