import { Op } from 'sequelize';
import model from '../../models/index.js';
const { Ressource } = model;

export default async function (req, res) {

    const { pseudo, firstname, lastname } = req.body;

    try {
        const ressource = await Ressource.findOne({ where: { [Op.or]: [{ pseudo }] } });
        
        if (ressource) {
            return res.status(422).send({ message: 'Ressource already exist' });
        }

        await Ressource.create({
            pseudo,
            firstname,
            lastname,
        });
        return res.status(201).send({ message: 'Ressource created successfully' });
    } catch (e) {
        console.log(e);
        return res.status(500).send(
                    { message: 'Could not perform operation at this time, kindly try again later.' + e.message });
    }
}
