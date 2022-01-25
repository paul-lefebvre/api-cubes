import model from '../../models/index.js';
const { Like } = model;

export default async function (req, res) {
  const id = req.params.id;

  Like.update(req.body, {
    where: { lik_id: id }
  })
    .then(num => {
      if (num == 1) {
        res.send({
          message: "Like was updated successfully."
        });
      } else {
        res.send({
          message: `Cannot update Like with id=${id}. Maybe Like was not found or req.body is empty!`
        });
      }
    })
    .catch(err => {
      res.status(500).send({
          message: "Error updating Like with id=" + id,
          error: err,
      });
    });
}
