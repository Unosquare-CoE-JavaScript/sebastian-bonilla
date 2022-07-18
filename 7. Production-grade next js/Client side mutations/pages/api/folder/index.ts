import nc from 'next-connect';
import middleware from '../../../middleware/all';
import onError from '../../../middleware/error';
import { folder } from '../../../db';
import { Resquest } from '../../../types';


const handler = nc({
    onError
})

handler.put(async (req: Resquest, res) => {
    const newFolder = await folder.createFolder(req.db, {
        ...req.body,
         createdBy: req.user.id,
         name: req.body.name
    })

    res.send({ data: newFolder});
})

export default handler; 