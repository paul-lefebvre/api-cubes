import { Op } from 'sequelize';
import model from '../../models/index.js';
const { Media } = model;

export default async function (req, res) {

    const { pseudo, firstname, lastname } = req.body;

    try {
        const media = await Media.findOne({ where: { [Op.or]: [{ pseudo }] } });
        
        if (media) {
            return res.status(422).send({ message: 'Media already exist' });
        }

        await Media.create({
            pseudo,
            firstname,
            lastname,
        });
        return res.status(201).send({ message: 'Media created successfully' });
    } catch (e) {
        console.log(e);
        return res.status(500).send(
                    { message: 'Could not perform operation at this time, kindly try again later.' + e.message });
    }
}
