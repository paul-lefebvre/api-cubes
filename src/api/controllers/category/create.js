import { Op } from 'sequelize';
import model from '../../models/index.js';
const { Category } = model;

export default async function (req, res) {

    const { pseudo, firstname, lastname } = req.body;

    try {
        const category = await Category.findOne({ where: { [Op.or]: [{ pseudo }] } });
        
        if (category) {
            return res.status(422).send({ message: 'Category already exist' });
        }

        await Category.create({
            pseudo,
            firstname,
            lastname,
        });
        return res.status(201).send({ message: 'Category created successfully' });
    } catch (e) {
        console.log(e);
        return res.status(500).send(
                    { message: 'Could not perform operation at this time, kindly try again later.' + e.message });
    }
}
