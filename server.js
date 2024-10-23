const express = require("express");
// const joi = require("joi");
const app = express();
app.use(express.json());

app.post('/get', (req, res)=>{
    const {a, b} = req.body;
    console.log(typeof a, typeof b)
    if(typeof a!='number' || typeof b!="number"){
        res.json({status:500, Error:"please send a and b in number "})
    }
    else{
        res.json({status:200, message:"success", data:a+b})
    }
   
})
app.listen(5000, ()=>{
    console.log("app listening on port:", 5000);
});