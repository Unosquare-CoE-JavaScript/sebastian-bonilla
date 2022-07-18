import nc from 'next-connect';
import middleware from '../../../middleware/all';
import onError from '../../../middleware/error';
import { doc } from '../../../db';
import { Resquest } from '../../../types';


const handler = nc({
    onError
})

handler.put(async (req: Resquest, res) => {
    const updatedDoc = await doc.updateOne(req.db, res.query.id as string, req.body)

    res.send({ data: updatedDoc});
})

export default handler; 