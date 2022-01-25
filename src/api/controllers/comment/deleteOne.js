import model from '../../models/index.js';
const { Comment } = model;

export default async function (req, res) {
  const id = req.params.id;

  Comment.destroy({
    where: { srv_id: id }
  })
    .then(num => {
      if (num == 1) {
        res.send({
          message: "Comment was deleted successfully!"
        });
      } else {
        res.send({
          message: `Cannot delete Comment with id=${id}. Maybe Comment was not found!`
        });
      }
    })
    .catch(err => {
      res.status(500).send({
          message: "Could not delete Comment with id=" + id,
          error: err,
      });
    });
}
