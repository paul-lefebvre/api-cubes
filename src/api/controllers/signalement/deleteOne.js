import model from '../../models/index.js';
const { Signalement } = model;

export default async function (req, res) {
  const id = req.params.id;

  Signalement.destroy({
    where: { srv_id: id }
  })
    .then(num => {
      if (num == 1) {
        res.send({
          message: "Signalement was deleted successfully!"
        });
      } else {
        res.send({
          message: `Cannot delete Signalement with id=${id}. Maybe Signalement was not found!`
        });
      }
    })
    .catch(err => {
      res.status(500).send({
          message: "Could not delete Signalement with id=" + id,
          error: err,
      });
    });
}
