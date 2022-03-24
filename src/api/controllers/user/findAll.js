import { Op } from 'sequelize';
import model from '../../models/index.js';
const { User } = model;

export default async function (req, res) {
	User.findAll({
		include: [
      'abonnements',
      'publications',
      'abonnes',
			'likes',
		]
	})
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
