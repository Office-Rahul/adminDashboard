

import userAdminModel from "../models/userAdmin.js"

export const createAdminUser = async (req, res) => {
    try {
        const { userName, password , percentage , commission , status , wallet } = req.body
        const data = await userAdminModel.create(req.body)
        return res.status(201).send({ status: true, data: data })
    } catch (err) {
        console.log(err)
        return res.status(500).send({ status: false, message: err.message })
    }


}

export const getAdminUser = async (req, res) => {
    try {

        const data = await userAdminModel.find()
        return res.status(200).send({ status: true, data: data })
    } catch (err) {
        console.log(err)
        return res.status(500).send({ status: false, message: err.message })
    }


}


export const updateAdminUser = async (req, res) => {
    try {
        const { userId ,status } = req.body
        const data = await userAdminModel.findByIdAndUpdate(userId, req.body, { upsert: true , new :true})
        return res.status(200).send({ status: true, data: data })
    } catch (err) {
        console.log(err)
        return res.status(500).send({ status: false, message: err.message })
    }


}




