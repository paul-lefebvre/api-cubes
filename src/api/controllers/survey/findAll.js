import { Op } from 'sequelize';
import model from '../../models/index.js';
const { Survey } = model;

export default async function (req, res) {
	Survey.findAll({
		include: [
			'surveyOwner',
			'surveyResponses',
		]
	})
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
