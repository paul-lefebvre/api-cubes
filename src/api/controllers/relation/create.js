import { Op } from 'sequelize';
import model from '../../models/index.js';
const { Relation } = model;

export default async function (req, res) {

    const { type } = req.body;

    try {
        const relation = await Relation.findOne({ where: { [Op.or]: [{ type }] } });
        
        if (relation) {
            return res.status(422).send({ message: 'Relation : ' + type +' already exist' });
        }

        await Relation.create({ type });
        return res.status(201).send({ message: 'Relation created successfully' });
    } catch (e) {

        return res.status(500).send(
            {
                message: 'Could not perform operation at this time, kindly try again later.',
                error: e.message
            }
        );
        
    }
}
