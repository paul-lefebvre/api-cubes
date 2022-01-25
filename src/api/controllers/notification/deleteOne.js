import model from '../../models/index.js';
const { Notification } = model;

export default async function (req, res) {
  const id = req.params.id;

  Notification.destroy({
    where: { srv_id: id }
  })
    .then(num => {
      if (num == 1) {
        res.send({
          message: "Notification was deleted successfully!"
        });
      } else {
        res.send({
          message: `Cannot delete Notification with id=${id}. Maybe Notification was not found!`
        });
      }
    })
    .catch(err => {
      res.status(500).send({
          message: "Could not delete Notification with id=" + id,
          error: err,
      });
    });
}
