export interface MensajeProps{
    autor:"usuario"|"ia";
    texto:string;
}

function Mensaje({autor,texto}:MensajeProps){
    const esIA = autor ==="ia";

    const lado = esIA ? "justify-start" : "justify-end";

    const color = esIA
    ?"bg-slte-100 text-slate-900"
    :"bg-blue-600 text-white";

    return(
        <div className={`flex ${lado}`}>
            <p className={`max-w-[80%] rounded-2x1 px-4 py-2 md:max-w-md ${color}`}>
                <span className="sr-only">{esIA ? "La IA dice:": "Tu dices:"}</span>
                {texto}
            </p>
        </div>
    )
}

export default Mensaje;