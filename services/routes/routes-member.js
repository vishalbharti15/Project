const controller = require("../controllers/controller-member")

module.exports = function(member){

    member.route("/login").get(controller.login)

    member.route("/loginverify").post(controller.loginverify)

    member.route("/member-register").get(controller.register)

    member.route("/member-registered").post(controller.registered)

    member.route("/").get(controller.home)

    member.route('/logout').get(controller.logout)

    member.route('/forgot').get(controller.forgotView)

    member.route('/index').get(controller.index)

    member.route('/sendpassword').post(controller.sendPassword)

    member.route('/createAd/:id').get(controller.createAd)

    member.route("/uploadAction").post(controller.uploadAction)

    member.route("/viewallads/:id").get(controller.viewallads)

    member.route("/deleteallads/:id").get(controller.deleteallads)

    member.route("/updateProfile/:id").get(controller.updateProfileView)

    member.route("/updateMember").post(controller.updateMember)

    member.route("/updatePassword/:id").get(controller.updatePasswordView)

    member.route("/updatePassword").post(controller.updatePassword)

    member.route("/deleteme/:id").get(controller.deletemyaccount)

    member.route("/deleteAd/:id").get(controller.deleteAd)

    member.route("/editAd/:id").get(controller.updateView)

    member.route("/updateAd").post(controller.updateAd)

    member.route("/reuploadImg/:id").get(controller.reuploadImgView)

    member.route("/reuploadImg").post(controller.reuploadImg)

}