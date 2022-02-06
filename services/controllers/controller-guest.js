const mongodb = require("mongodb")
const dbController = require("../db/db-guest")
const emailController = require("../mail-service")

//dbController.dbController.connection()

var controller = {
    home: function (req, res) {
        res.render("guest-home", { title: "Guest Home Page" })
    },

    viewallads: function (req, res) {
        dbController.dbController.viewallads(res)
    },

    viewFullDetails: function (req, res) {
        var id = req.params.id
        dbController.dbController.viewFullDetails(id, res)
    },

    contactMember: function (req, res) {
        var id = req.params.id
        dbController.dbController.contactMember(id, res)
    },

    sendMail: async function (req, res) {
        var memberData = {
            mid: req.body.mid,
            name: req.body.name,
            email: req.body.email,
            message: req.body.message,
            adminemail: req.body.adminemail
        }
        mailBody = "Hi!! " + memberData.name + ", " + "<br><p> A guest user has sent you a message !</p><p>Message:<b>" + memberData.message + "</b</p>"
        emailController.send(memberData.email, memberData.adminemail, "vishalbhaarti@gmail.com", "Contact Mail", mailBody)
        res.redirect("/guest/viewallads")
    },

}

module.exports = controller