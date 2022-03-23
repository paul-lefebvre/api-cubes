import { Op } from "sequelize";
import model from "../../models/index.js";
const { User } = model;

export default async function (req, res) {
  const { pseudo, firstname, lastname, mail, password, roles } = req.body;
  try {
    const user = await User.findOne({ where: { [Op.or]: [{ mail }] } });
    if (user) {
      return res.status(422).send({ message: "User already exist" });
    }

    await User.create({
      pseudo,
      firstname,
      lastname,
      mail,
      password,
      roles,
    });
    return res.status(201).send({ message: "Account created successfully" });
  } catch (e) {
    console.log(e);
    return res.status(500).send({
      message:
        "Could not perform operation at this time, kindly try again later." +
        e.message,
    });
  }
}
