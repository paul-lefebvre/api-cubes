import model from '../../models/index.js';
const { Response } = model;

export default async function (req, res) {
  const id = req.params.id;

  Response.update(req.body, {
    where: { rep_id: id }
  })
    .then(num => {
      if (num == 1) {
        res.send({
          message: "Response was updated successfully."
        });
      } else {
        res.send({
          message: `Cannot update Response with id=${id}. Maybe Response was not found or req.body is empty!`
        });
      }
    })
    .catch(err => {
      res.status(500).send({
          message: "Error updating Response with id=" + id,
          error: err,
      });
    });
}
