const express = require("express");
const mongoose = require("mongoose");
require("dotenv").config()

const personRoutes = require("./routes/PersonRoutes")

const MongoURI = process.env.MONGODB_URI;

const app = express();

app.use(
    express.urlencoded({extended: true
    })
)

app.use(express.json())

app.use("/person", personRoutes)


app.get("/", (req, res) => {
    res.json({message: "OI"})
})

mongoose.connect(MongoURI)
.then(() => {
    console.log("Conectado ao mongo")
    app.listen(3000);
})
.catch((err) => console.log(err))



