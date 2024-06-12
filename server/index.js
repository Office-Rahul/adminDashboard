

import express from 'express'
import mongoose from 'mongoose';
import cors from 'cors'
import bodyParser from 'body-parser';

// import route from "../routes/route.js"

const app = express();

mongoose.connect('mongodb://localhost:27017/adminDashboard', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
})
    .then(() => {
        console.log('MongoDB connected');
    })
    .catch((err) => {
        console.error('MongoDB connection error:', err);
    });

app.use(cors());
app.use(express.json());
app.use(bodyParser.json());
app.use(express.urlencoded({ extended: true }));

const userSchema = new mongoose.Schema({
    userName: String,
    password: String,
    commission: String,
    status: { type: Boolean, default: false },
    percentage: String,
    wallet: String,
  });
  
  const User = mongoose.model("User", userSchema);

app.get("/getAdminUser", async (req, res) => {
    try {
      const users = await User.find();
      res.status(200).json({ status: true, data: users });
    } catch (error) {
      res.status(500).json({ status: false, message: error.message });
    }
  });

  app.post("/createAdminUser", async (req, res) => {
    const { userName, password, commission } = req.body;
    try {
      const newUser = new User({
        userName,
        password,
        commission,
        percentage: "0",
        wallet: "0",
      });
      await newUser.save();
      res.status(201).json({ status: true, data: newUser });
    } catch (error) {
      res.status(500).json({ status: false, message: error.message });
    }
  });


  app.put("/updateAdminUser", async (req, res) => {
    const { userId, status } = req.body;
    try {
      const user = await User.findByIdAndUpdate(userId, { status }, { new: true });
      res.status(200).json({ status: true, data: user });
    } catch (error) {
      res.status(500).json({ status: false, message: error.message });
    }
  });

// app.use('/', route);

// app.use('/*', (req, res) => {
//     res.status(404).send({ status: false, message: 'Page not found' });
// });

const PORT = 8000;

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
