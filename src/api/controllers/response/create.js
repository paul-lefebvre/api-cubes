import { Op } from 'sequelize';
import model from '../../models/index.js';
const { Response } = model;

export default async function (req, res) {

    const { pseudo, firstname, lastname } = req.body;

    try {
        const response = await Response.findOne({ where: { [Op.or]: [{ pseudo }] } });
        
        if (response) {
            return res.status(422).send({ message: 'Response already exist' });
        }

        await Response.create({
            pseudo,
            firstname,
            lastname,
        });
        return res.status(201).send({ message: 'Response created successfully' });
    } catch (e) {
        console.log(e);
        return res.status(500).send(
                    { message: 'Could not perform operation at this time, kindly try again later.' + e.message });
    }
}
