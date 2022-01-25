import model from '../../models/index.js';
const { Media } = model;

export default async function (req, res) {

  const id = req.params.id;

  Media.findByPk(id)
    .then(data => {
      if (data) {
        res.send(data);
      } else {
        res.status(404).send({
          message: `Cannot find Media with id=${id}.`
        });
      }
    })
    .catch(err => {
      res.status(500).send({
          message: "Error retrieving Media with id=" + id,
          error: err,
      });
    });

}
