import { Op } from 'sequelize';
import model from '../../models/index.js';
const { Event } = model;

export default async function (req, res) {

	Event.findAll({
		include: [
			'participants',
		]
	})
    .then(data => {
      res.send(data);
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while retrieving Event."
      });
    });
}
