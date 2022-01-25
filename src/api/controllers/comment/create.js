import { Op } from 'sequelize';
import model from '../../models/index.js';
const { Comment } = model;

export default async function (req, res) {

    const { pseudo, firstname, lastname } = req.body;

    try {
        const comment = await Comment.findOne({ where: { [Op.or]: [{ pseudo }] } });
        
        if (comment) {
            return res.status(422).send({ message: 'Comment already exist' });
        }

        await Comment.create({
            pseudo,
            firstname,
            lastname,
        });
        return res.status(201).send({ message: 'Comment created successfully' });
    } catch (e) {
        console.log(e);
        return res.status(500).send(
                    { message: 'Could not perform operation at this time, kindly try again later.' + e.message });
    }
}
