const express=require("express");
const res = require("express/lib/response");
const router=express.Router();

//router.use(mylogger);

router.get("/",mylogger,(req,res)=>{
    res.send("User2.");
});

router.get("/info",(req,res)=>{
    res.send("<h1>user information2</h1>");
});

router.get("/:id",(req,res)=>{
    res.send(`I got a user info of ${req.params.id}.`);
    });

//Middleware setting.
function mylogger(req, res, next){
    console.log(req.originalUrl);
    next();
}

module.exports=router;
