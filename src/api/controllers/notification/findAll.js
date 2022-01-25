import { Op } from 'sequelize';
import model from '../../models/index.js';
const { Notification } = model;

export default async function (req, res) {
    
    const subject = req.query.subject;
    
    var condition = subject ? { subject: { [Op.like]: `%${subject}%` } } : null;

    Notification.findAll({ where: condition })
    .then(data => {
      res.send(data);
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while retrieving Notification."
      });
    });
}
