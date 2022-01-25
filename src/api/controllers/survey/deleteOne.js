import model from '../../models/index.js';
const { Survey } = model;

export default async function (req, res) {
  const id = req.params.id;

  Survey.destroy({
    where: { srv_id: id }
  })
    .then(num => {
      if (num == 1) {
        res.send({
          message: "Survey was deleted successfully!"
        });
      } else {
        res.send({
          message: `Cannot delete Survey with id=${id}. Maybe Survey was not found!`
        });
      }
    })
    .catch(err => {
      res.status(500).send({
          message: "Could not delete Survey with id=" + id,
          error: err,
      });
    });
}
