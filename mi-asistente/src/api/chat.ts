import type { MensajeProps } from "../components/Mensaje";

const CHAT_URL:string | undefined = import.meta.env.VITE_CHAT_URL;

interface RespuestaChat{
    respuesta:string
}


export async function enviarMensaje(historial:MensajeProps[]) : Promise<string>{
    if(!CHAT_URL){
        return respuestaSimulada(historial)
    }

    const res = await fetch(CHAT_URL,{
        method:"POST",
        headers:{"Content-Type":"application/json"},
        body: JSON.stringify({mensajes:historial}),
    });

    if(!res.ok){
        throw new Error(`El servidor respondiio con error ${res.status}`);
    }

    const datos: RespuestaChat = await res.json();
    return datos.respuesta;

}

function esperar(ms:number){
    return new Promise((resolver)=>setTimeout(resolver,ms));
}

async function respuestaSimulada(historial:MensajeProps[]):Promise<string>{
    await esperar(1200);
    const ultimo = historial[historial.length-1]?.texto.toLowerCase()??"";

    if(ultimo.includes("error")){
        throw new Error("No se pudo conectar con chef AI")
    }
    if(ultimo.includes("platano")){
        return "Con platanos puedes hacer mangu,tostones o maduros al horno. Cual prefieres?"
    }
    return `"${historial[historial.length-1]?.texto}.Cuando se conecte el chatbot real,aqui vera su respuesta. `
}