const mongodb = require("mongodb")
const formidable = require('formidable')
const fs = require('fs')
const dbController = require("../db/db-member")
const emailController = require("../mail-service")
var currloginUser;

dbController.dbController.connection()

var controller ={
    login : function(req,res){
        res.render("member-login",{title : "Member Login Page",data : null})
    },

    loginverify : async function(req,res){
        var email = req.body.email
        var password = req.body.password

        var userData = await dbController.loginMember(email, password)
        currloginUser = userData 
        if (userData != null)
        {   
            res.render("member-home", {title : "Member Home Page", userData : userData})
        }
        else
        {
            res.render("member-login", {title : "Member Login Page"})
        }
    },

    register : function(req, res){
        res.render("member-register",{title : "Member Registration Page"})
    },

    registered : function(req, res){
        var data = {
            name: req.body.name,
            email: req.body.email,
            password: req.body.password,
            age: req.body.age,
            dob: req.body.dob,
            address: req.body.address,
            pincode: req.body.pincode,
            mobile: req.body.mobile
        }
        dbController.dbController.registerMember(data)
        res.render("member-login", {title : "Member Login Page"})
    },

    home: function (req, res) {
        if (req.session.login) {
            res.render("member-home", { title: "Member Home Page" })
        }
        else {
            res.render("member-login", { title: "Member Login Page" })
        }
    },

    logout: function (req, res) {
        req.session.destroy(function (err) {
            console.log("session destroyed")
        })
        res.render("member-login", { title: "Member Login Page" })
    },

    index: function (req, res) {
        res.render("member-home", { title: "Member Home Page", userData: currloginUser })
    },

    forgotView: function (req, res) {
        res.render("member-forgot-password", { title: "Member Forgot Password Page" })
    },

    sendPassword: async function (req, res) {
        var email = req.body.email
        var user = await dbController.getUserByEmail(email)
        if (user == null) {
            res.send("Invalid email address")
        }
        else {
            var password = user.password
            var name = user.name            
            mailBody = "Hi " + name + "," + "<br> Your password is : <b>" + password + "</b"
            emailController.send2(email, "vishalbhaarti@gmail.com", "Password Recovery", mailBody)
            res.render("member-login", { title: "Member Login Page" })
        }

    },

    createAd: function (req, res) {
        var id = req.params.id        
        res.render("createad", { title: "Create Ad", id: id })
    },  

    viewallads: async function (req, res) {
        var id = req.params.id
        await dbController.dbController.viewallads(res, id)
    },

    deleteallads: function (req, res) {
        var id = req.params.id
        dbController.dbController.deleteallads(res, id)            
    },

    updateProfileView: function (req, res) {
        var id = req.params.id
        dbController.dbController.updateProfileView(id, res)
    },

    updateMember: async function (req, res) {
        var memberData = {
            id: req.body.id,
            name: req.body.name,
            email: req.body.email,
            password: currloginUser.password,
            age: req.body.age,
            dob: req.body.dob,
            address: req.body.address,
            pincode: req.body.pincode,
            mobile: req.body.mobile
        }
        currloginUser.name = memberData.name
        dbController.dbController.updateMember(memberData)
        await res.redirect("/member/index")
    },

    updatePasswordView: function (req, res) {
        var id = req.params.id
        dbController.dbController.updatePasswordView(id, res)
    },

    updatePassword: async function (req, res) {
        var memberData = {
            id: req.body.id,
            email: req.body.email,
            password: req.body.password
        }
        dbController.dbController.updatePassword(memberData)        
        await res.redirect("/member/index")
    },

    deletemyaccount: function (req, res) {
        var id = req.params.id
        dbController.dbController.deletemyaccount(res, id)             
    },

    deleteAd: async function (req,res) {
        var id = req.params.id
        await dbController.dbController.deleteAd(res,id) 
        res.redirect("/member/viewallads/"+currloginUser._id.toString()) 
    },

    uploadAction: async function (req,res) {
        console.log("Inside controller function")
        var form = new formidable.IncomingForm()
        dbController.insertAd(req,form,currloginUser)
        await res.redirect("/member/index")
    },

    updateView : function(req,res){
        var id = req.params.id 
        dbController.dbController.updateView(id,res)        
    },

    updateAd : async function (req,res) {
        
        var adData = {   
            id : req.body.id,         
            title: req.body.title,
            description: req.body.description,
            price: req.body.price,
            image: req.body.image
        }        
        await dbController.dbController.updateAd(adData)
        res.redirect("/member/viewallads/"+currloginUser._id.toString()) 
    },

    reuploadImgView:function(req,res){
        var id = req.params.id 
        dbController.dbController.reuploadImgView(id,res)        
    },

    reuploadImg : async function (req,res) {
        var form = new formidable.IncomingForm()
        await dbController.reuploadImgAd(req,form,currloginUser)
        res.redirect("/member/viewallads/"+currloginUser._id.toString()) 
    },

}

module.exports = controller