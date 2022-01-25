import model from '../../models/index.js';
const { Ressource } = model;

export default async function (req, res) {

  const id = req.params.id;

  Ressource.findByPk(id)
    .then(data => {
      if (data) {
        res.send(data);
      } else {
        res.status(404).send({
          message: `Cannot find Ressource with id=${id}.`
        });
      }
    })
    .catch(err => {
      res.status(500).send({
          message: "Error retrieving Ressource with id=" + id,
          error: err,
      });
    });

}
