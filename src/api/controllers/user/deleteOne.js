import { Op } from 'sequelize';
import model from '../../models/index.js';
const { User } = model;

export default async function (req, res) {
  const id = req.params.id;

  User.destroy({
    where: { usr_id: id }
  })
    .then(num => {
      if (num == 1) {
        res.send({
          message: "User was deleted successfully!"
        });
      } else {
        res.send({
          message: `Cannot delete User with id=${id}. Maybe User was not found!`
        });
      }
    })
    .catch(err => {
      res.status(500).send({
          message: "Could not delete User with id=" + id,
          error: err,
      });
    });
}
