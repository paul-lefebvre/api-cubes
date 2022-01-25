import model from '../../models/index.js';
const { Signalement } = model;

export default async function (req, res) {
  const id = req.params.id;

  Signalement.update(req.body, {
    where: { sig_id: id }
  })
    .then(num => {
      if (num == 1) {
        res.send({
          message: "Signalement was updated successfully."
        });
      } else {
        res.send({
          message: `Cannot update Signalement with id=${id}. Maybe Signalement was not found or req.body is empty!`
        });
      }
    })
    .catch(err => {
      res.status(500).send({
          message: "Error updating Signalement with id=" + id,
          error: err,
      });
    });
}
