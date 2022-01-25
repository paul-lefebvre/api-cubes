import model from '../../models/index.js';
const { Comment } = model;

export default async function (req, res) {

  const id = req.params.id;

  Comment.findByPk(id)
    .then(data => {
      if (data) {
        res.send(data);
      } else {
        res.status(404).send({
          message: `Cannot find Comment with id=${id}.`
        });
      }
    })
    .catch(err => {
      res.status(500).send({
          message: "Error retrieving Comment with id=" + id,
          error: err,
      });
    });

}
