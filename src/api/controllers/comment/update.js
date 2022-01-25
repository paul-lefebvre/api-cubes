import model from '../../models/index.js';
const { Comment } = model;

export default async function (req, res) {
  const id = req.params.id;

  Comment.update(req.body, {
    where: { com_id: id }
  })
    .then(num => {
      if (num == 1) {
        res.send({
          message: "Comment was updated successfully."
        });
      } else {
        res.send({
          message: `Cannot update Comment with id=${id}. Maybe Comment was not found or req.body is empty!`
        });
      }
    })
    .catch(err => {
      res.status(500).send({
          message: "Error updating Comment with id=" + id,
          error: err,
      });
    });
}
