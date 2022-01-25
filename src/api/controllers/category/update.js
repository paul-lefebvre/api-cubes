import model from '../../models/index.js';
const { Category } = model;

export default async function (req, res) {
  const id = req.params.id;

  Category.update(req.body, {
    where: { cat_id: id }
  })
    .then(num => {
      if (num == 1) {
        res.send({
          message: "Category was updated successfully."
        });
      } else {
        res.send({
          message: `Cannot update Category with id=${id}. Maybe Category was not found or req.body is empty!`
        });
      }
    })
    .catch(err => {
      res.status(500).send({
          message: "Error updating Category with id=" + id,
          error: err,
      });
    });
}
