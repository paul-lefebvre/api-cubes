import model from '../../models/index.js';
const { Media } = model;

export default async function (req, res) {
  const id = req.params.id;

  Media.update(req.body, {
    where: { med_id: id }
  })
    .then(num => {
      if (num == 1) {
        res.send({
          message: "Media was updated successfully."
        });
      } else {
        res.send({
          message: `Cannot update Media with id=${id}. Maybe Media was not found or req.body is empty!`
        });
      }
    })
    .catch(err => {
      res.status(500).send({
          message: "Error updating Media with id=" + id,
          error: err,
      });
    });
}
