import mongoose  from "mongoose";


const userSchema = new mongoose.Schema({
    userName: String,
    password: String,
    commission: String,
    status: { type: Boolean, default: false },
    percentage: String,
    wallet: String,
    
  });
  
  const distributor = mongoose.model("User", userSchema);

  export default distributor;