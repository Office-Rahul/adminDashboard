import mongoose from "mongoose";

const distributorSchema = new mongoose.Schema(
  {
    userName: { type: String, required: true },
    password: { type: String, required: true },
    commission: { type: Number, default: 0 },
    status: { type: Boolean, default: true }, // true for active, false for inactive
    wallet: { type: Number },
  },
  { timestamps: true }
);

const distributor = mongoose.model("distributor", distributorSchema);

export default distributor;
