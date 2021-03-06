import model from '../../models/index.js';
const { Like } = model;

export default async function (req, res) {

  const id = req.params.id;

  Like.findByPk(id)
    .then(data => {
      if (data) {
        res.send(data);
      } else {
        res.status(404).send({
          message: `Cannot find Like with id=${id}.`
        });
      }
    })
    .catch(err => {
      res.status(500).send({
          message: "Error retrieving Like with id=" + id,
          error: err,
      });
    });

}
