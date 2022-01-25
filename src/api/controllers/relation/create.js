import { Op } from 'sequelize';
import model from '../../models/index.js';
const { Relation } = model;

export default async function (req, res) {

    const { pseudo, firstname, lastname } = req.body;

    try {
        const relation = await Relation.findOne({ where: { [Op.or]: [{ pseudo }] } });
        
        if (relation) {
            return res.status(422).send({ message: 'Relation already exist' });
        }

        await Relation.create({
            pseudo,
            firstname,
            lastname,
        });
        return res.status(201).send({ message: 'Relation created successfully' });
    } catch (e) {
        console.log(e);
        return res.status(500).send(
                    { message: 'Could not perform operation at this time, kindly try again later.' + e.message });
    }
}
