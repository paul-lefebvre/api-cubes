import model from '../../models/index.js';
const { Survey } = model;

export default async function (req, res) {
  const id = req.params.id;

  Survey.update(req.body, {
    where: { srv_id: id }
  })
    .then(num => {
      if (num == 1) {
        res.send({
          message: "Survey was updated successfully."
        });
      } else {
        res.send({
          message: `Cannot update Survey with id=${id}. Maybe Survey was not found or req.body is empty!`
        });
      }
    })
    .catch(err => {
      res.status(500).send({
          message: "Error updating Survey with id=" + id,
          error: err,
      });
    });
}
