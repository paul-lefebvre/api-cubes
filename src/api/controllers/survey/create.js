import { Op } from 'sequelize';
import model from '../../models/index.js';
const { Survey } = model;

export default async function (req, res) {

    const { pseudo, firstname, lastname } = req.body;

    try {
        const survey = await Survey.findOne({ where: { [Op.or]: [{ pseudo }] } });
        
        if (survey) {
            return res.status(422).send({ message: 'Survey already exist' });
        }

        await Survey.create({
            pseudo,
            firstname,
            lastname,
        });
        return res.status(201).send({ message: 'Survey created successfully' });
    } catch (e) {
        console.log(e);
        return res.status(500).send(
                    { message: 'Could not perform operation at this time, kindly try again later.' + e.message });
    }
}
