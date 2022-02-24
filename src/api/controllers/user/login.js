import {Op} from 'sequelize';
import model from '../../models/index.js';

const {User} = model;
//const jwt = require("jsonwebtoken");


export default async function (req, res) {

    const {email, password} = req.body;

    const userWithEmail = await User.findOne({where: {email}}).catch((err) => {
        console.log("Error: ", err);
    })

    if (!userWithEmail)
        return res.json({message: "Email or password does not match!"});

    if (userWithEmail.password !== password)
        return res.json({message: "Email or password does not match!"});

    //const jwtToken = jwt.sign({id: userWithEmail.id, email: userWithEmail.email}, process.env.JWT_TOKEN_SECRET);

    res.json({message: "Welcome"});
}