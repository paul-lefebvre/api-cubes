import { Op } from 'sequelize';
import model from '../../models/index.js';
const { Event } = model;

export default async function (req, res) {

    const { pseudo, firstname, lastname } = req.body;

    try {
        const event = await Event.findOne({ where: { [Op.or]: [{ pseudo }] } });
        
        if (event) {
            return res.status(422).send({ message: 'Event already exist' });
        }

        await Event.create({
            pseudo,
            firstname,
            lastname,
        });
        return res.status(201).send({ message: 'Event created successfully' });
    } catch (e) {
        console.log(e);
        return res.status(500).send(
                    { message: 'Could not perform operation at this time, kindly try again later.' + e.message });
    }
}
