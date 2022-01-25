import model from '../../models/index.js';
const { Notification } = model;

export default async function (req, res) {
  const id = req.params.id;

  Notification.update(req.body, {
    where: { not_id: id }
  })
    .then(num => {
      if (num == 1) {
        res.send({
          message: "Notification was updated successfully."
        });
      } else {
        res.send({
          message: `Cannot update Notification with id=${id}. Maybe Notification was not found or req.body is empty!`
        });
      }
    })
    .catch(err => {
      res.status(500).send({
          message: "Error updating Notification with id=" + id,
          error: err,
      });
    });
}
