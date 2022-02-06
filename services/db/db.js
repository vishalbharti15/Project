const mongodb = require('mongodb')
const mongoClient = require('mongodb').MongoClient
var url = "mongodb://localhost:27017"
var db

function getDbConnection()
{
    mongoClient.connect(url, function(err, server){
        db = server.db("Project")
        console.log("Project DB Connected from main Server")
        return db
    })
}

module.exports = {getDbConnection}