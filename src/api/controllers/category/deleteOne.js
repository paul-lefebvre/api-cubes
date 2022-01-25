import model from '../../models/index.js';
const { Category } = model;

export default async function (req, res) {
  const id = req.params.id;

  Category.destroy({
    where: { srv_id: id }
  })
    .then(num => {
      if (num == 1) {
        res.send({
          message: "Category was deleted successfully!"
        });
      } else {
        res.send({
          message: `Cannot delete Category with id=${id}. Maybe Category was not found!`
        });
      }
    })
    .catch(err => {
      res.status(500).send({
          message: "Could not delete Category with id=" + id,
          error: err,
      });
    });
}
