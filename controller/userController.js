import User from "../models/userModel.js";

// export const createAdminUser = async (req, res) => {
//   try {
//     const { userName, password, percentage } = req.body;
//     const data = await User.create(req.body);
//     return res.status(201).send({ status: true, data: data });
//   } catch (err) {
//     console.log(err);
//     return res.status(500).send({ status: false, message: err.message });
//   }
// };
export const createAdminUser = async (req, res) => {
  try {
    const { userName, password, commission } = req.body;

    if (!userName || !password || !commission) {
      return res
        .status(400)
        .send({ status: false, message: "all fields are required" });
    }
    const data = await User.create(req.body);
    res.status(201).send({ status: true, data: data });
  } catch (error) {
    console.log("Error creating user:", error);
    res.status(500).send({ status: false, error: "Failed to create user" });
  }
};

// export const getAdminUser = async (req, res) => {
//   try {
//     const data = await User.find();
//     return res.status(200).send({ status: true, data: data });
//   } catch (err) {
//     console.log(err);
//     return res.status(500).send({ status: false, message: err.message });
//   }
// };
export const getAdminUser = async (req, res) => {
  try {
    const users = await User.find();
    res.status(200).json({ status: true, data: users });
  } catch (error) {
    console.log("Error fetching users:", error);
    res.status(500).json({ status: false, error: "Failed to fetch users" });
  }
};

// export const updateAdminUser = async (req, res) => {
//   try {
//     const { userId } = req.params;
//     const data = await User.findByIdAndUpdate(userId, req.body, {
//       upsert: true,
//       new: true,
//     });
//     return res.status(200).send({ status: true, data: data });
//   } catch (err) {
//     console.log(err);
//     return res.status(500).send({ status: false, message: err.message });
//   }
// };

export const updateAdminUser = async (req, res) => {
  // const { userName, password, commission, status } = req.body;
  try {
    const { userId } = req.params;
    const updatedUser = await User.findByIdAndUpdate(userId, req.body, {
      new: true,
    });
    res.status(200).send({ status: true, user: updatedUser });
  } catch (error) {
    console.log("Error updating user:", error);
    res.status(500).send({ status: false, error: "Failed to update user" });
  }
};

// export const deleteAdminUser = async (req, res) => {
//   try {
//     const { userId } = req.params;
//     const user = await User.findByIdAndDelete(userId);

//     if (!user) {
//       return res.status(404).send({ status: false, message: 'User not found' });
//     }

//     return res.status(200).send({ status: true, message: 'User deleted successfully' });
//   } catch (err) {
//     console.log(err);
//     return res.status(500).send({ status: false, message: 'Error deleting user' });
//   }
// };

export const deleteAdminUser = async (req, res) => {
  const { userId } = req.params;
  try {
    await User.findByIdAndDelete(userId);
    res
      .status(200)
      .json({ status: true, message: "User deleted successfully" });
  } catch (error) {
    console.log("Error deleting user:", error);
    res.status(500).json({ status: false, error: "Failed to delete user" });
  }
};
