import { Op } from 'sequelize';
import model from '../../models/index.js';
const { Like } = model;

export default async function (req, res) {

    const { pseudo, firstname, lastname } = req.body;

    try {
        const like = await Like.findOne({ where: { [Op.or]: [{ pseudo }] } });
        
        if (like) {
            return res.status(422).send({ message: 'Like already exist' });
        }

        await Like.create({
            pseudo,
            firstname,
            lastname,
        });
        return res.status(201).send({ message: 'Like created successfully' });
    } catch (e) {
        console.log(e);
        return res.status(500).send(
                    { message: 'Could not perform operation at this time, kindly try again later.' + e.message });
    }
}
