import { Op } from 'sequelize';
import model from '../../models/index.js';
const { Notification } = model;

export default async function (req, res) {

    const { pseudo, firstname, lastname } = req.body;

    try {
        const notification = await Notification.findOne({ where: { [Op.or]: [{ pseudo }] } });
        
        if (notification) {
            return res.status(422).send({ message: 'Notification already exist' });
        }

        await Notification.create({
            pseudo,
            firstname,
            lastname,
        });
        return res.status(201).send({ message: 'Notification created successfully' });
    } catch (e) {
        console.log(e);
        return res.status(500).send(
                    { message: 'Could not perform operation at this time, kindly try again later.' + e.message });
    }
}
