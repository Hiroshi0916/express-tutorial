const express=require("express");
const app=express();
const userRouter=require("./routes/user");

const PORT=3000;
//app.use(mylogger);


//app.use(express.static("public"));
app.set("view engine","ejs");


app.get("/",(req,res)=>{
//    res.sendStatus(400);
//    res.sendStatus(500);
//    console.log("Hello express");
//    res.send("<h1>Hello again</h1>");

//res.status(500).send("This is ERROR.");
//res.status(500).json({msg:" ERROR"});
res.render("index",{ text:"Nodejs and Express"});

});

//Routing set
app.use("/user",userRouter);

//app.use("/auth",userRouter);
//app.use("/customer",userRouter);
//app.use("/product",userRouter);




app.listen(PORT,()=>console.log("Start a server."));