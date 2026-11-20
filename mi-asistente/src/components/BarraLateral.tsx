const conversaciones = ["Recetas de hoy","Postres","Menu de la seman"];

function Barralateral(){
    return(
        <aside className="hidden w-64 border-r border-slate-200 bg-slate-50 p-4 md:block">
            <h2 className="mb-3 text-sm font-semibold text-slate-600 uppercase">
                Conversaciones
            </h2>
            <nav aria-label="Conversaciones">
                <ul className="flex flex-col gap-1">
                    {conversaciones.map((c)=>(
                        <li key={c}>
                              <button className="w-full rounded-lg px-3 py-2 text-left hover:bg-slate-200 focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:outline-none">
                                {c}
                            </button>
                        </li>
                    ))}
                </ul>
            </nav>
        </aside>
    )
}

export default Barralateral;