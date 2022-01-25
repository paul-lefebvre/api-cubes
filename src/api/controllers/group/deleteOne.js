import model from '../../models/index.js';
const { Group } = model;

export default async function (req, res) {
  const id = req.params.id;

  Group.destroy({
    where: { srv_id: id }
  })
    .then(num => {
      if (num == 1) {
        res.send({
          message: "Group was deleted successfully!"
        });
      } else {
        res.send({
          message: `Cannot delete Group with id=${id}. Maybe Group was not found!`
        });
      }
    })
    .catch(err => {
      res.status(500).send({
          message: "Could not delete Group with id=" + id,
          error: err,
      });
    });
}
