import { Op } from 'sequelize';
import model from '../models/index.js';

const { User } = model;

export default {
  async signUp(req, res) {
    const {pseudo, firstname, lastname} = req.body;
    try {
      const user = await User.findOne({where: {[Op.or]: [ {pseudo}, {lastname} ]}});
      if(user) {
        return res.status(422)
        .send({message: 'User already exist'});
      }

      await User.create({
        pseudo,
        firstname,
        lastname,
      });
      return res.status(201).send({message: 'Account created successfully'});
    } catch(e) {
      console.log(e);
      return res.status(500)
      .send(
        {message: 'Could not perform operation at this time, kindly try again later.' + e.message});
    }
  }
}