import mongoose from "mongoose";

const useradminSchema = new mongoose.Schema({


  userName: String,
  password: String,
  commission: String,
  status: { type: Boolean, default: false },
  percentage: String,
  wallet: String,
  
  // userName: { type: String, require: true },
  // password: { type: String, require: true },
  // percentage: { type: Number },
  // commission: { type: Number, default: 0.0 },
  // status: { type: Boolean, default: true },
  // wallet: { type: Boolean, default: true },
});

const userAdminModel = mongoose.model("adminUserData", useradminSchema);

export default userAdminModel;
