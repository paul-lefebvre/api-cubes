import model from '../../models/index.js';
const { Notification } = model;

export default async function (req, res) {

  const id = req.params.id;

  Notification.findByPk(id)
    .then(data => {
      if (data) {
        res.send(data);
      } else {
        res.status(404).send({
          message: `Cannot find Notification with id=${id}.`
        });
      }
    })
    .catch(err => {
      res.status(500).send({
          message: "Error retrieving Notification with id=" + id,
          error: err,
      });
    });

}
