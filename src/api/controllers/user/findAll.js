import { Op } from 'sequelize';
import model from '../../models/index.js';
const { User } = model;

export default async function (req, res) {
    
    const pseudo = req.query.pseudo;
    
    var condition = pseudo ? { pseudo: { [Op.like]: `%${pseudo}%` } } : null;

    User.findAll({ where: condition })
    .then(data => {
      res.send(data);
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while retrieving users."
      });
    });
}
