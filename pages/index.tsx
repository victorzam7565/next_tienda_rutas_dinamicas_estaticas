import Head from 'next/head';
import Image from 'next/image';
import { Inter } from '@next/font/google';
import styles from '@/styles/Home.module.css';
import {useState, useEffect} from 'react';
import {Store} from '@/types';
import StoreCard from '@/components/storecard';
import Link from 'next/link';
import { GetServerSideProps,GetStaticProps } from 'next';
import api from '@/api';



const inter = Inter({ subsets: ['latin'] })
interface Props{
  stores:Store[]
}


export default function Home<Props>({stores}:any) {
 
 
 // con getServerside no requerimos esto
 {/* const [stores, setStores]= useState<Store[]>([]);
     useEffect( () => {
  
  fetch("/api/stores")
     .then((res) =>res.json())

   .then((stores:Store[]) => setStores(stores));
 },[]);
 if(!stores.length){
  return <span>cargando... </span>
 }
*/}
 

  return <main>
        {stores.map((store:any) =>(

          <Link key={store.id} href={`/${store.id}`}>
<StoreCard  store={store}/>
          </Link>
          
        ))}
  </main>
};

// usando getServersideProps no requerimos la api y tenemos todo los datos de una comunicandonos con la data base teniendo cada request todos los datos


// getStaticProps renderizo economicamente y como es contenido dinamico no tengo que buscar a la data base casa rato
// con GetStaticprops se requiere un getStaticPath un camino para cada ruta dinamica y tiene que tener un fallback para alguna ruta que no este definida

export const getStaticProps : GetStaticProps = 
async () => { 
const stores = await  api.list();
  
  return {
     props:{stores},
    };
};















 



