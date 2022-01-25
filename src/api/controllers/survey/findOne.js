import model from '../../models/index.js';
const { Survey } = model;

export default async function (req, res) {

  const id = req.params.id;

  Survey.findByPk(id)
    .then(data => {
      if (data) {
        res.send(data);
      } else {
        res.status(404).send({
          message: `Cannot find Survey with id=${id}.`
        });
      }
    })
    .catch(err => {
      res.status(500).send({
          message: "Error retrieving Survey with id=" + id,
          error: err,
      });
    });

}
