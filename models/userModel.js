const mongoose = require("mongoose");
const bcrypt = require('bcrypt');

const userSchema = mongoose.Schema({
  name: {type: String,required: [true, "Name is required"]},
  email: {type :String , required : [true, "Name is required"]},
  password:{type:String,required:[true, "Name is required"]}
});

userSchema.pre("save",async function(next){
    if(!this.isModified("password")){
        return next()
    }
    const salt = await bcrypt.genSalt(10);
    this.password = await bcrypt.hash(this.password,salt);
    next()
})

const userModel = mongoose.model("user", userSchema);

module.exports = userModel;