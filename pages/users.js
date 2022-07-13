import React, { useState } from 'react'
import L from 'next/link'
function users({res}) {

    return (
        <div>
            <ul>
                {res.map(res => {
                    return (

                        <div key={res.id}>
                            <L href={`/users/${res.id}`} >
                                <a>
                                    {
                                        res.name
                                    }
                                </a>
                            </L>

                        </div>
                    )
                })}
            </ul>
        </div>
    )
}
export default users
//https://jsonplaceholder.typicode.com/users
export  async function getStaticProps(data) {
    let api  = await fetch('https://jsonplaceholder.typicode.com/users');
    let res = await  api.json();

    return {
        props:{res},
    }
}