import model from '../../models/index.js';
const { Event } = model;

export default async function (req, res) {
  const id = req.params.id;

  Event.destroy({
    where: { srv_id: id }
  })
    .then(num => {
      if (num == 1) {
        res.send({
          message: "Event was deleted successfully!"
        });
      } else {
        res.send({
          message: `Cannot delete Event with id=${id}. Maybe Event was not found!`
        });
      }
    })
    .catch(err => {
      res.status(500).send({
          message: "Could not delete Event with id=" + id,
          error: err,
      });
    });
}
