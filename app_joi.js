const express = require("express");
const Joi = require("joi");
const app = express();
app.use(express.json());
const userSchema = Joi.object({
    a: Joi.number().integer(),
    b: Joi.number().integer()
    
});
app.post('/get', (req, res)=>{
    const {a, b} = req.body;
    const { error } = userSchema.validate(req.body);
    if (error) {
        res.json({status:500, Error:"please send a and b in number "})
    }
    else{
        res.json({status:200, message:"success", data:a+b})
    }
   
})
app.listen(5000, ()=>{
    console.log("app listening on port:", 5000);
});