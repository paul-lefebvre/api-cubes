import model from '../../models/index.js';
const { Relation } = model;

export default async function (req, res) {
  const id = req.params.id;

  Relation.update(req.body, {
    where: { rel_id: id }
  })
    .then(num => {
      if (num == 1) {
        res.send({
          message: "Relation was updated successfully."
        });
      } else {
        res.send({
          message: `Cannot update Relation with id=${id}. Maybe Relation was not found or req.body is empty!`
        });
      }
    })
    .catch(err => {
      res.status(500).send({
          message: "Error updating Relation with id=" + id,
          error: err,
      });
    });
}
