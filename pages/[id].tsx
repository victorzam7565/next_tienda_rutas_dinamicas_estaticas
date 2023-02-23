import Button from '@mui/material/Button'
import Link from 'next/link';
import { GetStaticProps,GetStaticPaths } from 'next';
import api from '@/api';
import StoreCard from '@/components/storecard';
import {Store} from '@/types';


interface Props {
   store:Store[];
   
}
//credenciales mas seguras no pasan por el navegador y no se usa api intermedia

export default function Storess<Props>({store}:any){ 
  return (
    
<>
 <StoreCard store={store}/>

 <Link href="/">
 <Button variant="contained" color="warning">
   volver al inicio
 </Button>
 </Link>
</>
  )
}

export const getStaticProps : GetStaticProps = 
async ({params}) => { 
const store = await  api.fetch(params?.id as string);
  
  return {
     props:{store},
     // numero entero en segundo en que se recarga para 
     //renobar datos por detras el nuevo usuario en una tienda o app
     revalidate:100
    };
};


export const getStaticPaths: GetStaticPaths = async () => {
const stores = await api.list();

return {
    paths: stores.map((store)=>(
      {params:{id:store.id}}
    )
    ),
    fallback:"blocking"

};
};