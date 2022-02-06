//adding required modules
const express = require('express')
const session = require('express-session')
var bodyParser = require('body-parser')
const path = require('path')

//adding port number
var port = 5000

//creating server
var app = express()

//creating sub server
var admin = express() 
var member = express()
var guest = express()

//mount body parser
app.use(bodyParser.urlencoded({
    extended:true
    }))

//mount ejs
app.set("view engine", "ejs")
admin.set("view engine", "ejs")
member.set("view engine", "ejs")
guest.set("view engine", "ejs")

//create sessions for sub servers
admin.use(session({
    secret: "admin123",
    resave: true,
    saveUninitialized: true
}))

member.use(session({
    secret: "member123",
    resave: true,
    saveUninitialized: true
}))

guest.use(session({
    secret: "guest123",
    resave: true,
    saveUninitialized: true
}))

//mount the sub server on to main server app
app.use("/admin", admin)
app.use("/member", member)
app.use("/guest", guest)

//routes mapping
/* var studentroute = require('./services/routes-student') */
var adminroute = require("./services/routes/routes-admin")
var memberroute = require("./services/routes/routes-member")
var guestroute = require("./services/routes/routes-guest")

//studentroute(student)
adminroute(admin)
memberroute(member)
guestroute(guest)

app.use(express.static('public'))
member.use(express.static('public'))

app.listen(port, function(err,res){
    if (err){
        console.log("Error in Starting Server")
    }
    console.log("Server Started at : ", port)
})

app.get("/style.css", function (req, res) {
    res.sendFile(__dirname + "/views/style.css")
})