import { Op } from 'sequelize';
import model from '../../models/index.js';
const { User } = model;

export default async function (req, res) {
  const id = req.params.id;

  User.update(req.body, {
    where: { usr_id: id }
  })
    .then(num => {
      if (num == 1) {
        res.send({
          message: "User was updated successfully."
        });
      } else {
        res.send({
          message: `Cannot update User with id=${id}. Maybe User was not found or req.body is empty!`
        });
      }
    })
    .catch(err => {
      res.status(500).send({
          message: "Error updating User with id=" + id,
          error: err,
      });
    });
}
