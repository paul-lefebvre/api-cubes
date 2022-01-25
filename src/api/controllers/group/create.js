import { Op } from 'sequelize';
import model from '../../models/index.js';
const { Group } = model;

export default async function (req, res) {

    const { pseudo, firstname, lastname } = req.body;

    try {
        const group = await Group.findOne({ where: { [Op.or]: [{ pseudo }] } });
        
        if (group) {
            return res.status(422).send({ message: 'Group already exist' });
        }

        await Group.create({
            pseudo,
            firstname,
            lastname,
        });
        return res.status(201).send({ message: 'Group created successfully' });
    } catch (e) {
        console.log(e);
        return res.status(500).send(
                    { message: 'Could not perform operation at this time, kindly try again later.' + e.message });
    }
}
