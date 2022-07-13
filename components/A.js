import React from 'react'
import L from 'next/link'
function A({text,href}) {
  return (
    <div>
    <L href={href}>
 
        <p>{
            text
}</p>
    </L>
    </div>
  )
}

export default A