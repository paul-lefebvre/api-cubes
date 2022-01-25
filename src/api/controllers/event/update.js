import model from '../../models/index.js';
const { Event } = model;

export default async function (req, res) {
  const id = req.params.id;

  Event.update(req.body, {
    where: { evt_id: id }
  })
    .then(num => {
      if (num == 1) {
        res.send({
          message: "Event was updated successfully."
        });
      } else {
        res.send({
          message: `Cannot update Event with id=${id}. Maybe Event was not found or req.body is empty!`
        });
      }
    })
    .catch(err => {
      res.status(500).send({
          message: "Error updating Event with id=" + id,
          error: err,
      });
    });
}
