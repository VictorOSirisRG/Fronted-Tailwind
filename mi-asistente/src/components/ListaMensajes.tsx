import Mensaje, {type MensajeProps} from "./Mensaje";

interface Props{
    mensajes : MensajeProps[];
}


function ListaMensajes({mensajes}:Props){
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
        </div>
    );
}


export default ListaMensajes;