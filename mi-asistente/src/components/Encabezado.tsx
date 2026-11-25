interface Props{
    titulo:string;
    onNuevaConversacion:()=>void;
}

function Encabezado({titulo,onNuevaConversacion}:Props){
    return(
        <header className="border-b border-slate-200 bg-white px-4 py-3">
            <div>
            <h1 className="text-xl font-bold text-slate-900">{titulo}</h1>
            <p className="text-sm text-slate-600">Tu asistente con IA</p>
            </div>
            <button
            type="button"
            onClick={onNuevaConversacion}
            className="rounded-lg border border-slate-300 px-3 py-1.5 text-sm hover:bg-slate-100 focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:outline-none"
            >Nueva Conversacion</button>


        </header>

    );
};

export default Encabezado;