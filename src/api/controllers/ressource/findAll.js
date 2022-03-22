import { Op } from 'sequelize';
import model from '../../models/index.js';
const { Ressource } = model;

export default async function (req, res) {

	Ressource.findAll({
		include: [
			'category',
			'owner',
			'media',
		],
	})
    .then(data => {
      res.send(data);
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while retrieving ressources."
      });
    });
}
