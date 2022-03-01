import model from "../../models/index.js";
import { Op } from "sequelize";
import jwt from "jsonwebtoken";

const { User } = model;

export default async function (req, res) {
  const { mail, password } = req.body;

  try {
    const userWithMail = await User.findOne({ where: { [Op.or]: [{ mail }] } });
    if (!userWithMail) {
      return res.status(500).send({ message: "ce mail est inconnu" });
    }
    if (userWithMail.password !== password) {
      return res.status(501).send({ message: "mot de passe incorrect" });
    }

    const token = jwt.sign({id: userWithMail.usr_id},process.env.JWT_TOKEN_SECRET, { expiresIn: '3600s'})

    return res
      .status(201)
      .json({ acces_token: token })
      .send({ message: "connection réussie!", user: userWithMail });
  } catch (e) {
    console.log(e);
    return res.status(404).send({
      message: "requête impossible" + e.message,
    });
  }
}
