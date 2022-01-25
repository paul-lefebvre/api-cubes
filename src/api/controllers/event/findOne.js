import model from '../../models/index.js';
const { Event } = model;

export default async function (req, res) {

  const id = req.params.id;

  Event.findByPk(id)
    .then(data => {
      if (data) {
        res.send(data);
      } else {
        res.status(404).send({
          message: `Cannot find Event with id=${id}.`
        });
      }
    })
    .catch(err => {
      res.status(500).send({
          message: "Error retrieving Event with id=" + id,
          error: err,
      });
    });

}
