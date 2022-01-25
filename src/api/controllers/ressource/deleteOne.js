import model from '../../models/index.js';
const { Ressource } = model;

export default async function (req, res) {
  const id = req.params.id;

  Ressource.destroy({
    where: { srv_id: id }
  })
    .then(num => {
      if (num == 1) {
        res.send({
          message: "Ressource was deleted successfully!"
        });
      } else {
        res.send({
          message: `Cannot delete Ressource with id=${id}. Maybe Ressource was not found!`
        });
      }
    })
    .catch(err => {
      res.status(500).send({
          message: "Could not delete Ressource with id=" + id,
          error: err,
      });
    });
}
