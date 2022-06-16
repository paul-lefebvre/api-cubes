//import {Op} from 'sequelize';
import model from '../../models/index.js';



const {Ressource} = model;
const {Media} = model;


export default async function (req, res) {

    const {usr_id, answers, cat_id,} = req.body;
    let path = null;

    try {

        if (req.file.filename !== null) {
            path = req.file.filename;
        }

       //  const ressource =
        await Ressource.create({
            usr_id,
            answers,
            cat_id,
            medias: [
                {path}
            ]},{

            include: [Media]
        });
            //    as: 'media'


            //const media =
            //    await Media.create({path,res_id: ressource.res_id});
            // await ressource.addMedia(media);
            // await Media.create([{
            //         path,
            //         res_id: ressource.res_id,
            //     }]
            // )

            //}).then(res => console.log(res))
            //     .catch((e) => res.send({message:e.message}));
//await ressource.create.Media([{ path: 'path'}]);

            return res.status(201).send({message: 'Ressource created successfully :' });
        }
    catch
        (e)
        {
            return res.status(500).send(
                {message: 'Could not perform operation at this time, kindly try again later.' + e.message + res });
        }
    }


