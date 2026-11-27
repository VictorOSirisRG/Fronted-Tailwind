"use client";

import { useState } from "react";


export default function BotonLike({inicial = 0}: {inicial?:number}){
    const [likes,setLikes] = useState(inicial);

    return(
        <button onClick={()=>setLikes(likes+1)}>
            ❤️ {likes}
        </button>
    )
}