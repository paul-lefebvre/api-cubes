import model from '../../models/index.js';
const { Conversation } = model;

export default async function (req, res) {
  const id = req.params.id;

  Conversation.update(req.body, {
    where: { cvs_id: id }
  })
    .then(num => {
      if (num == 1) {
        res.send({
          message: "Conversation was updated successfully."
        });
      } else {
        res.send({
          message: `Cannot update Conversation with id=${id}. Maybe Conversation was not found or req.body is empty!`
        });
      }
    })
    .catch(err => {
      res.status(500).send({
          message: "Error updating Conversation with id=" + id,
          error: err,
      });
    });
}
