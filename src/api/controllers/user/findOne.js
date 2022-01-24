import { Op } from 'sequelize';
import model from '../../models/index.js';
const { User } = model;

export default async function (req, res) {

  const id = req.params.id;

  User.findByPk(id)
    .then(data => {
      if (data) {
        res.send(data);
      } else {
        res.status(404).send({
          message: `Cannot find User with id=${id}.`
        });
      }
    })
    .catch(err => {
      res.status(500).send({
          message: "Error retrieving User with id=" + id,
          error: err,
      });
    });

}
