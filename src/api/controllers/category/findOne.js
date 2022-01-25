import model from '../../models/index.js';
const { Category } = model;

export default async function (req, res) {

  const id = req.params.id;

  Category.findByPk(id)
    .then(data => {
      if (data) {
        res.send(data);
      } else {
        res.status(404).send({
          message: `Cannot find Category with id=${id}.`
        });
      }
    })
    .catch(err => {
      res.status(500).send({
          message: "Error retrieving Category with id=" + id,
          error: err,
      });
    });

}
