import model from '../../models/index.js';
const { Relation } = model;

export default async function (req, res) {

  const id = req.params.id;

  Relation.findByPk(id)
    .then(data => {
      if (data) {
        res.send(data);
      } else {
        res.status(404).send({
          message: `Cannot find Relation with id=${id}.`
        });
      }
    })
    .catch(err => {
      res.status(500).send({
          message: "Error retrieving Relation with id=" + id,
          error: err,
      });
    });

}
