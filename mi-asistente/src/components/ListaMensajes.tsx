import { useEffect,useRef } from "react";
import Mensaje, {type MensajeProps} from "./Mensaje";

interface Props{
    mensajes : MensajeProps[];
    escribiendo: boolean;
}



function ListaMensajes({mensajes,escribiendo}:Props){

    const finalRef = useRef<HTMLDivElement>(null);
    
    useEffect(()=>{
        finalRef.current?.scrollIntoView({behavior:"smooth"});
    },[mensajes.length,escribiendo])
    
    if(mensajes.length ===0){
        return(
            <p className="p-8 text-center text-slate-500">
                Aun no hay mensajes. Escribe el primero!
            </p>
        );
    }

    return(
        <div className="flex flex-col gap-3 p-4" role="log" aria-live="polite">
            {mensajes.map((m,i)=>(
                <Mensaje key={i} autor={m.autor} texto={m.texto}/>
            ))}

            {escribiendo &&(
                <p className="text-sm text-slate-500 italic">Chef AI esta escribiendo....</p>
            )}
            <div ref={finalRef}/>
        </div>
    );
}


export default ListaMensajes;