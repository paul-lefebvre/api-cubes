import { Op } from 'sequelize';
import model from '../../models/index.js';
const { Signalement } = model;

export default async function (req, res) {

    const { pseudo, firstname, lastname } = req.body;

    try {
        const signalement = await Signalement.findOne({ where: { [Op.or]: [{ pseudo }] } });
        
        if (signalement) {
            return res.status(422).send({ message: 'Signalement already exist' });
        }

        await Signalement.create({
            pseudo,
            firstname,
            lastname,
        });
        return res.status(201).send({ message: 'Signalement created successfully' });
    } catch (e) {
        console.log(e);
        return res.status(500).send(
                    { message: 'Could not perform operation at this time, kindly try again later.' + e.message });
    }
}
