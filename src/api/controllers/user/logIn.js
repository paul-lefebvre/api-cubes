import model from "../../models/index.js";
import { Op } from "sequelize";
import jwt from "jsonwebtoken";

const { User } = model;

export default async function (req, res) {
  const { mail, password } = req.body;

  try {
    const userWithMail = await User.findOne({
      where: { [Op.or]: [{ mail }] },
      include: [
        'abonnements',
        'abonnes',
      ]
    });
    
    
    if (!userWithMail) {
      return res.status(500).send({ message: "Mail ou mot de passe invalide", error: true });
    }
    if (userWithMail.password !== password) {
      return res.status(501).send({ message: "Mail ou mot de passe invalide", error: true });
    }

    const token = jwt.sign(
      { user: userWithMail },
      process.env.JWT_TOKEN_SECRET,
      { expiresIn: "3600s" }
    );

    return res
      .status(201)
      .json({ user: userWithMail, acces_token: token })
      .send({
        message: "Connection réussie!",
        user: userWithMail,
        acces_token: token,
        error: false,
      });
  } catch (e) {
    console.log(e);
    return res.status(404).send({
      message: "Requête impossible" + e.message,
      error: true,
    });
  }
}
