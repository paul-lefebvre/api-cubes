import model from '../../models/index.js';
const { Response } = model;

export default async function (req, res) {
  const id = req.params.id;

  Response.destroy({
    where: { srv_id: id }
  })
    .then(num => {
      if (num == 1) {
        res.send({
          message: "Response was deleted successfully!"
        });
      } else {
        res.send({
          message: `Cannot delete Response with id=${id}. Maybe Response was not found!`
        });
      }
    })
    .catch(err => {
      res.status(500).send({
          message: "Could not delete Response with id=" + id,
          error: err,
      });
    });
}
