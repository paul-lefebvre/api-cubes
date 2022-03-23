import { Op } from "sequelize";
import model from "../../models/index.js";
const { Relation } = model;

export default async function (req, res) {
  const id = req.params.id;
  const followed = req.body.followed;

  try {
    const alreadyFollow = await Relation.findOne({
      where: {
        [Op.and]: [{ follower_id: id }, { followed_id: followed }],
      },
    });

    if (alreadyFollow) {
      return res.status(422).send({ message: "Relation already exist" });
    }
    await Relation.create({ follower_id: id, followed_id: followed });
	return res.status(201).send({ message: "Relation created successfully" });
  } catch (e) {
    console.log(e);
    return res.status(500).send({
      message:
        "Could not perform operation at this time, kindly try again later." +
        e.message,
    });
  }
}
