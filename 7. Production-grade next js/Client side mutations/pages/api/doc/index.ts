import nc from 'next-connect';
import middleware from '../../../middleware/all';
import onError from '../../../middleware/error';
import { doc } from '../../../db';
import { Resquest } from '../../../types';


const handler = nc({
    onError
})

handler.post(async (req: Resquest, res) => {
    const newDoc = await doc.createDoc(req.db, {
        ...req.body,
        createdBy: req.user.id
    })

    res.send({ data: newDoc});
})

export default handler; 