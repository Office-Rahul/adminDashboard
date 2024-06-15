import mongoose from "mongoose";

// const useradminSchema = new mongoose.Schema({
//   userName: String,
//   password: String,
//   commission: String,
//   status: { type: Boolean, default: false },
//   percentage: String,
//   wallet: String,
// });

// const User = mongoose.model("adminUserData", useradminSchema);

// export default User;

// models/user.model.js





const useradminSchema = new mongoose.Schema({
  userName: { type: String, required: true },
  password: { type: String, required: true },
  commission: { type: Number, default: 0 },
  status: { type: Boolean, default: true }, // true for active, false for inactive
  wallet: { type: Number },
}, { timestamps: true });

 const User = mongoose.model("adminUserData", useradminSchema);;

 export default User;

