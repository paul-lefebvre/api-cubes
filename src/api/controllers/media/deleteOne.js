import model from '../../models/index.js';
const { Media } = model;

export default async function (req, res) {
  const id = req.params.id;

  Media.destroy({
    where: { srv_id: id }
  })
    .then(num => {
      if (num == 1) {
        res.send({
          message: "Media was deleted successfully!"
        });
      } else {
        res.send({
          message: `Cannot delete Media with id=${id}. Maybe Media was not found!`
        });
      }
    })
    .catch(err => {
      res.status(500).send({
          message: "Could not delete Media with id=" + id,
          error: err,
      });
    });
}
