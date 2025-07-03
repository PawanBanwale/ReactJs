import React from 'react'
function Products({age,obj}){
    return (
     <div className="w-full h-60 bg-zinc-800 text-white">
        <h1>{age}</h1>
        <h2>{obj.name}</h2>
     </div>
    )
}
export default Products