interface Props{
    titulo:string;
}

function Encabezado({titulo}:Props){
    return(
        <header className="border-b border-slate-200 bg-white px-4 py-3">
            <h1 className="text-xl font-bold text-slate-900">{titulo}</h1>
            <p className="text-sm text-slate-600">Tu asistente con IA</p>
        </header>
    );
};

export default Encabezado;