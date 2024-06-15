import distributor from "../models/distributorModel.js";



export const createDistributor = async (req, res) => {
  try {
    const { userName, password, commission } = req.body;

    if (!userName || !password || !commission) {
      return res
        .status(400)
        .send({ status: false, message: "all fields are required" });
    }
    const data = await distributor.create(req.body);
    res.status(201).send({ status: true, data: data });
  } catch (error) {
    console.log("Error creating user:", error);
    res.status(500).send({ status: false, error: "Failed to create user" });
  }
};


export const getDistributor = async (req, res) => {
  try {
    const users = await distributor.find();
    res.status(200).json({ status: true, data: users });
  } catch (error) {
    console.log("Error fetching users:", error);
    res.status(500).json({ status: false, error: "Failed to fetch users" });
  }
};



export const updateDistributor = async (req, res) => {
  // const { userName, password, commission, status } = req.body;
  try {
    const { userId } = req.params;
    const updatedUser = await distributor.findByIdAndUpdate(userId, req.body, {
      new: true,
    });
    res.status(200).send({ status: true, user: updatedUser });
  } catch (error) {
    console.log("Error updating user:", error);
    res.status(500).send({ status: false, error: "Failed to update user" });
  }
};


export const deleteDistributor = async (req, res) => {
  const { userId } = req.params;
  try {
    await distributor.findByIdAndDelete(userId);
    res
      .status(200)
      .json({ status: true, message: "User deleted successfully" });
  } catch (error) {
    console.log("Error deleting user:", error);
    res.status(500).json({ status: false, error: "Failed to delete user" });
  }
};
