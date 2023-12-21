const { Model } = require("objection");
const knex = require("knex");
const expressjs = require("express");
const ExpressT = require("express").Express;
const bodyParser = require("body-parser");

const YAML = require("yamljs");
const cors = require("cors");
const swaggerUI = require("swagger-ui-express");
const isAdmin = require("./src/middleware/isAdmin");
const handleLogger = require("./src/middleware/handlerLogger");
const carRouter = require("./src/routes/carRouter");
const upload = require("./src/middleware/upload");
const userRouter = require("./src/routes/userRouter");

//@ts-ignore
const app: Express = expressjs();
app.use(bodyParser.json());
app.use(expressjs.urlencoded({extended: true}));
const swaggerDocument = YAML.load("./openAPI.yaml");
const cloudinary = require("cloudinary").v2;
const knexInstance = knex({
  client: "postgresql",
  connection: {
    database: "binar_chapter_5",
    user: "admin",
    password: "123456",
    // filename: "./dev.sqlite3"
  },
});

const PORT: number = 8000;

Model.knex(knexInstance);
cloudinary.config({
  cloud_name: "dvsyg1frc",
  api_key: "741777918221123",
  api_secret: "2Dmmo3DeDS5BDC55TanKIWPw0cI",
});

app.use(cors());
// to set up view engine tools using ejs
app.set("view engine", "ejs");

// to custom default views pathname in ejs
app.set("views", "./src/views");
app.use((req:any, res:any, next:any)=> {
  res.set("framework", "nodejs-1");
  next()
});
app.use(expressjs.static("public"));
app.use(handleLogger);

// separation of concern;
app.use("/v1/cars/api-docs", swaggerUI.serve, swaggerUI.setup(swaggerDocument));
app.use("/v1/cars", carRouter);
app.use("/v1/users", userRouter);

//@ts-ignore
app.post("/v1/cars/picture", upload.single("picture"), (req, res) => {
  const filebase64 = req.file.buffer.toString("base64");
  const file = `data:${req.file.mimetype};base64,${filebase64}`;

  //@ts-ignore
  cloudinary.uploader.upload(file, (err, result) => {
    if (err) {
      return res.status(400).json({
        message: err.message,
      });
    }

    res.status(201).json({
      message: "Upload success",
      url: result.url,
    });
  });
});

const server = app.listen(PORT, () => {
  console.log(`is listening to port ${PORT}`);
});


module.exports = server