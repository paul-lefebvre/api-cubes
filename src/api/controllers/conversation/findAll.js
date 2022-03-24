import { Op } from 'sequelize';
import model from '../../models/index.js';
const { Conversation } = model;

export default async function (req, res) {

  Conversation.findAll({
    include: [
      'contacts'
    ]
  })
  .then(data => {
    res.send(data);
  })
  .catch(err => {
    res.status(500).send({
      message: err.message || "Some error occurred while retrieving Conversation."
    });
  });
}
