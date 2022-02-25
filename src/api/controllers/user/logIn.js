import model from "../../models/index.js";
import { Op } from "sequelize";

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
    return res.status(201).send({ message: "connection réussie!" });
  } catch (e) {
    console.log(e);
    return res.status(404).send({
      message: "requête impossible" + e.message,
    });
  }
}
