import { Op } from 'sequelize';
import model from '../../models/index.js';
const { Survey } = model;

export default async function (req, res) {
    
    const title = req.query.title;
    
    var condition = title ? { title: { [Op.like]: `%${title}%` } } : null;

    Survey.findAll({ where: condition })
    .then(data => {
      res.send(data);
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while retrieving surveys."
      });
    });
}
