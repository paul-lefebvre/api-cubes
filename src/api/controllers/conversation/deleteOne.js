import model from '../../models/index.js';
const { Conversation } = model;

export default async function (req, res) {
  const id = req.params.id;

  Conversation.destroy({
    where: { srv_id: id }
  })
    .then(num => {
      if (num == 1) {
        res.send({
          message: "Conversation was deleted successfully!"
        });
      } else {
        res.send({
          message: `Cannot delete Conversation with id=${id}. Maybe Conversation was not found!`
        });
      }
    })
    .catch(err => {
      res.status(500).send({
          message: "Could not delete Conversation with id=" + id,
          error: err,
      });
    });
}
