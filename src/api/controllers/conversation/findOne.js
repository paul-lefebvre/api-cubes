import model from '../../models/index.js';
const { Conversation } = model;

export default async function (req, res) {

  const id = req.params.id;

  Conversation.findByPk(id)
    .then(data => {
      if (data) {
        res.send(data);
      } else {
        res.status(404).send({
          message: `Cannot find Conversation with id=${id}.`
        });
      }
    })
    .catch(err => {
      res.status(500).send({
          message: "Error retrieving Conversation with id=" + id,
          error: err,
      });
    });

}
