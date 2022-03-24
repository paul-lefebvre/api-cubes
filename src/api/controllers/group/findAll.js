import { Op } from 'sequelize';
import model from '../../models/index.js';
const { Group } = model;

export default async function (req, res) {

  Group.findAll({
    include: [
      'adherants',
    ]
  })
  .then(data => {
    res.send(data);
  })
  .catch(err => {
    res.status(500).send({
      message: err.message || "Some error occurred while retrieving Group."
    });
  });
}
