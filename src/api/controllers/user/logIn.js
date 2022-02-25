import model from "../../models/index.js";
import {Op} from "sequelize";

const {User} = model;

export default async function (req, res) {
    const {mail, password} = req.body;

    const userWithMail = await User.findOne({where: {[Op.or]: [{mail}]}});
    try {
        if (!userWithMail) {
            return res.status(422).send({message: "Error Email or password does not match",});
        }
        if (userWithMail.password !== password) {
            res.status(422).send({message: "Error Email or password does not match",})
        }

    } catch (e) {
        console.log(e);
        return res.status(500).send({
            message:
                "Could not perform operation at this time, kindly try again later." +
                e.message,
        });
    }
    res.send(userWithMail);
    // res.status(200).send({message:"c'est ok"});

}