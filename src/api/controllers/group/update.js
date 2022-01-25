import model from '../../models/index.js';
const { Group } = model;

export default async function (req, res) {
  const id = req.params.id;

  Group.update(req.body, {
    where: { grp_id: id }
  })
    .then(num => {
      if (num == 1) {
        res.send({
          message: "Group was updated successfully."
        });
      } else {
        res.send({
          message: `Cannot update Group with id=${id}. Maybe Group was not found or req.body is empty!`
        });
      }
    })
    .catch(err => {
      res.status(500).send({
          message: "Error updating Group with id=" + id,
          error: err,
      });
    });
}
