import model from '../../models/index.js';
const { Relation } = model;

export default async function (req, res) {
  const id = req.params.id;

  Relation.destroy({
    where: { srv_id: id }
  })
    .then(num => {
      if (num == 1) {
        res.send({
          message: "Relation was deleted successfully!"
        });
      } else {
        res.send({
          message: `Cannot delete Relation with id=${id}. Maybe Relation was not found!`
        });
      }
    })
    .catch(err => {
      res.status(500).send({
          message: "Could not delete Relation with id=" + id,
          error: err,
      });
    });
}
