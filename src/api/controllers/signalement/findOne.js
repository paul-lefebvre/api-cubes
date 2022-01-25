import model from '../../models/index.js';
const { Signalement } = model;

export default async function (req, res) {

  const id = req.params.id;

  Signalement.findByPk(id)
    .then(data => {
      if (data) {
        res.send(data);
      } else {
        res.status(404).send({
          message: `Cannot find Signalement with id=${id}.`
        });
      }
    })
    .catch(err => {
      res.status(500).send({
          message: "Error retrieving Signalement with id=" + id,
          error: err,
      });
    });

}
