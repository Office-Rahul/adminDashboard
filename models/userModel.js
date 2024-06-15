import mongoose from "mongoose";

const useradminSchema = new mongoose.Schema(
  {
    userName: { type: String, required: true },
    password: { type: String, required: true },
    commission: { type: Number, default: 0 },
    status: { type: Boolean, default: true }, // true for active, false for inactive
    wallet: { type: Number },
  },
  { timestamps: true }
);

const User = mongoose.model("adminUserData", useradminSchema);

export default User;
