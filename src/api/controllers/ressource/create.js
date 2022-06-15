//import {Op} from 'sequelize';
import model from '../../models/index.js';



const { Ressource } = model;
const { Media } = model;





export default async function (req, res) {

    const {usr_id, answers, cat_id,} = req.body;
    let path = null;

    try{

    if (req.file.filename !== null) {
       path = req.file.filename;
    }

//const ressource =
    await Ressource.create({
        usr_id,
        answers,
        cat_id,
        media: [{
        path,
       }],
   },{
      include: [{
          association: Media,
          as: 'media'
      }]
    });
    //await Media.create({
     //  path,
        // res_id: ressource.res_id,

   //}).then(res => console.log(res))
   //     .catch((e) => res.send({message:e.message}));

    return res.status(201).send({message: 'Ressource created successfully :' + Ressource.media[0].res_id});
} catch(e) {return res.status(500).send(
    {message: 'Could not perform operation at this time, kindly try again later.' + e.message + res} );}}


