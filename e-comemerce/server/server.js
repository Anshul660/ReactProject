const express = require("express");
const app =express();
const cors =require("cors");
app.use(cors())
const bodyParser = require("body-parser");
require("dotenv").config();
const port = process.env.PORT;
const Stripe = require("stripe")(process.env.STRIPE_SECRET_KEY);
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:true}));

app.get("/",(req,res)=>{
    res.send("hello world");
});

app.post("/pay",async(req,res)=>{
    res.send(res.body.token);
    await Stripe.charges.create({
        source:res.body.token.id,
        amount:res.body.amount,
        currency:"usd",
    })
})
app.listen(port,()=>{
console.log(`Server is running on port ${port}`);

});
// console.log("Happy")