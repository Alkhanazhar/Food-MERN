const { default: mongoose } = require("mongoose")
const app=require("./app")
const Database = require("./database")
const port=8000
try {
     Database.connect()
    console.log("db connected")
    app.listen(8000,()=>{console.log("server connected 8000")})
} catch (e) {
    console.log("error")
}