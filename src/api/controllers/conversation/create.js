import { Op } from 'sequelize';
import model from '../../models/index.js';
const { Conversation } = model;

export default async function (req, res) {

    const { pseudo, firstname, lastname } = req.body;

    try {
        const conversation = await Conversation.findOne({ where: { [Op.or]: [{ pseudo }] } });
        
        if (conversation) {
            return res.status(422).send({ message: 'Conversation already exist' });
        }

        await Conversation.create({
            pseudo,
            firstname,
            lastname,
        });
        return res.status(201).send({ message: 'Conversation created successfully' });
    } catch (e) {
        console.log(e);
        return res.status(500).send(
                    { message: 'Could not perform operation at this time, kindly try again later.' + e.message });
    }
}
