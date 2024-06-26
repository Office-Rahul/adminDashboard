

import adminUser from "../models/userAdmin1.js"

export const createPostData = async (req, res) => {
    try {
        const { name, email, password } = req.body;

        const userData = new adminUser({
            name,
            email,
            password
        });

        await userData.save();
        return res.status(200).send({ status: true, data: userData });
    } catch (err) {
        console.log(err);
        return res.status(500).send({ status: false, message: 'Server error while creating user' });
    }
};

export const checkPostData = async (req, res) => {
    try {
        const { email, password } = req.body;
        console.log(req.body);
        const userData = await adminUser.findOne({ email, password });
        console.log(userData);

        if (userData) {
            return res.json({message : 'user successfully login'})
        } else {
            return res.status(400).send({  message: "user invalid" });
        }
    } catch (err) {
        console.log(err);
        return res.status(500).send({  message: 'Server error while logging in' });
    }
};


