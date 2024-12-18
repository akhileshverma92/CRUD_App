const express = require('express')
const app = express()
const path = require("path")
const usermodal = require("./models/user")
const dotenv = require("dotenv")
dotenv.config()

app.set("view engine", "ejs")
app.use(express.json())
app.use(express.urlencoded({ extended: true }))
app.use(express.static(path.join(__dirname, "public")))

app.get("/", (req, res) => {
    res.render("index")
})
app.get("/read", async (req, res) => {
    let users = await usermodal.find()
    res.render("read", { users })
})

app.post("/create", async (req, res) => {
    let { name, email, image } = req.body
    let createduser = await usermodal.create({
        name,
        email,
        image,
    })
    console.log(createduser);
    res.redirect("/")

})
app.get("/delete/:id", async (req, res) => {
    let user = await usermodal.findOneAndDelete({ _id: req.params.id })
    res.redirect("/read")
})


app.get("/edit/:userid", async (req, res) => {
    let user = await usermodal.findOne({ _id: req.params.userid })
    res.render("edit", { user })
})

app.post("/update/:userid", async (req, res) => {
    let { name, image, email } = req.body;
    let user = await usermodal.findOneAndUpdate({ _id: req.params.userid }, { name, email, image },{new:true})
    res.redirect("/read") 
    
})

app.listen(3000, () => {
    console.log("server is running on port 3000")
})