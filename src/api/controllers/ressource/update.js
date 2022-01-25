import model from '../../models/index.js';
const { Ressource } = model;

export default async function (req, res) {
  const id = req.params.id;

  Ressource.update(req.body, {
    where: { res_id: id }
  })
    .then(num => {
      if (num == 1) {
        res.send({
          message: "Ressource was updated successfully."
        });
      } else {
        res.send({
          message: `Cannot update Ressource with id=${id}. Maybe Ressource was not found or req.body is empty!`
        });
      }
    })
    .catch(err => {
      res.status(500).send({
          message: "Error updating Ressource with id=" + id,
          error: err,
      });
    });
}
