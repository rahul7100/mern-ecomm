import { Mongoose, Schema } from "mongoose";

const userSchema = Schema({
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    unique: true,
    required: true,
  },
  hashpass: {
    type: String,
  },
  order: [],
  role: {
    type: Boolean,
  },
});

const user = Mongoose.model("users", userSchema);
module.exports = user;
