//este es un end point para consumir desde afuera o dentro de nuestra app

import type { NextApiRequest, NextApiResponse} from 'next'
   import api from '@/api' 
import Store from '../[id]'

    type Data = {
      name: string
    }
    
    
    
    export default async function handler(
      req: NextApiRequest,
      res: NextApiResponse<Data>
    )
     {
const stores:any =await api.list();

 return res.json(stores) 
};
 
 

    