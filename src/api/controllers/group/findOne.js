import model from '../../models/index.js';
const { Group } = model;

export default async function (req, res) {

  const id = req.params.id;

  Group.findByPk(id)
    .then(data => {
      if (data) {
        res.send(data);
      } else {
        res.status(404).send({
          message: `Cannot find Group with id=${id}.`
        });
      }
    })
    .catch(err => {
      res.status(500).send({
          message: "Error retrieving Group with id=" + id,
          error: err,
      });
    });

}
