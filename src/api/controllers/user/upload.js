import {Op} from "sequelize";
import model from "../../models/index.js";

const {User} = model;
//import multer from "multer";
//import path from "path";





export default async function (req, res) {


     const id = req.params.id;
     const user =  await User.findByPk(id);


    user.avatar_img = req.file.path;

    await user.save({fields: ['avatar_img']})

    res.send('Single File upload');
}