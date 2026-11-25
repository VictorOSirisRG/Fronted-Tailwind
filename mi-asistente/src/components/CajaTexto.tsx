
import { useState } from "react";

interface Props{
    onEnviar:(texto:string)=>void;
    deshabilitado:boolean;
}
function CajaTexto({onEnviar,deshabilitado}:Props){
    const [texto,setTexto] = useState("");
    
    function manejarSubmit(e:React.FormEvent<HTMLFormElement>){
        e.preventDefault();
        const limpio = texto.trim();
        if(!limpio || deshabilitado)return;
        onEnviar(limpio);
        setTexto("");
    }
    
    return(
        <form
         className="flex gap-2 border-slate-200 bg-white p-3"
         onSubmit={manejarSubmit}
         >

            <label htmlFor="mensaje" className="sr-only">
                Escribe tu mensaje
            </label>
            <input
            id="mensaje"
            type="texto"
            value={texto}
            onChange={(e)=>setTexto(e.target.value)}
            placeholder="Escribe tu mensaje..."
            autoComplete="off"
            className="flex-1 rounded-l border border-sate-300 px-3 py-2 focus:ring-2 focus:ring-blue-500 focus:outline-none"
            />
            <button
                type="submit"
                disabled={deshabilitado || !texto.trim()}
                 className="rounded-lg bg-blue-600 px-4 py-2 font-medium text-white hover:bg-blue-700 focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2 focus-visible:outline-none"
            >
                {deshabilitado? "Enviando.." : "Enviar"}
            </button>
        </form>
    );
}

export default CajaTexto;