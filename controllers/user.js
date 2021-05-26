import userModel from "../schemas/user";
const bcryptjs = require("bcryptjs");

exports.register = async (req, res) => {
  try {
    const user = {
      name: req.body.name,
      email: req.body.email,
    };
    const pass = req.body.password;
    await userModel.findOne({ email: user.email }, (err, userData) => {
      if (err) {
        throw err;
      } else {
        if (!userData) {
          const hashpass = bcryptjs.hashSync(pass, 10);
          user.hashpass = hashpass;
          const users = new userModel(user);
          users.save((err, data) => {
            if (err) {
              throw err;
            } else {
              return res.json({ msg: "User successfully registered!!!" });
            }
          });
        } else {
          return res.json({ msg: "User already exists!!!" });
        }
      }
    });
  } catch (err) {
    console.log(err);
  }
};


exports.login=async(req,res)=>{
  try{
    const user1={
      email:req.body.email,
      password:req.body.password
    }
    await userModel.findOne({email:user1.email},(req,userData)=>{
      if(err){
        throw err;

      }
      else{
        if(!userdata){
          res.json({msg:"USER DOESNOT EXIST"});
        }
        else{
          if (await bycryptjs.compare(user1.password,userData.hashpass)){

          }
          else{
            res.json("msg:WRONG PASSWORD BRO SAHI DAALO!!!");
          }
        }
      }
    })
  }
  catch(err){
    console.log(err);
  }
}
