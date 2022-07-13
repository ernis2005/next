import React from 'react'
import{useRouter} from 'next/router'
import s from './A.module.css'
function Index({res}) {
    console.log(res);
  return (
    <div>
        <p> {res.name}</p>
        <p> {res.phone}</p>
    </div>
  )
}

export default Index




export  async function getServerSideProps({params}) {
    let api  = await fetch(`https://jsonplaceholder.typicode.com/users/${params.id}`);
    let res = await  api.json();

    return {
        props:{res},
    }
}