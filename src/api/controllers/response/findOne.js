import model from '../../models/index.js';
const { Response } = model;

export default async function (req, res) {

  const id = req.params.id;

  Response.findByPk(id)
    .then(data => {
      if (data) {
        res.send(data);
      } else {
        res.status(404).send({
          message: `Cannot find Response with id=${id}.`
        });
      }
    })
    .catch(err => {
      res.status(500).send({
          message: "Error retrieving Response with id=" + id,
          error: err,
      });
    });

}
