import model from '../../models/index.js';
const { Like } = model;

export default async function (req, res) {
  const id = req.params.id;

  Like.destroy({
    where: { srv_id: id }
  })
    .then(num => {
      if (num == 1) {
        res.send({
          message: "Like was deleted successfully!"
        });
      } else {
        res.send({
          message: `Cannot delete Like with id=${id}. Maybe Like was not found!`
        });
      }
    })
    .catch(err => {
      res.status(500).send({
          message: "Could not delete Like with id=" + id,
          error: err,
      });
    });
}
