interface Props{
    mensaje:string;
    onReintentar:()=>void;
}

function AvisoError({mensaje,onReintentar}:Props){
    return(
          <div
      role="alert"
      className="mx-3 mb-2 flex items-center justify-between gap-3 rounded-lg border border-red-200 bg-red-50 px-4 py-2 text-sm text-red-800"
    >
      <span>{mensaje}</span>
      <button
        type="button"
        onClick={onReintentar}
        className="rounded-lg bg-red-600 px-3 py-1 font-medium text-white hover:bg-red-700 focus-visible:ring-2 focus-visible:ring-red-500 focus-visible:ring-offset-2 focus-visible:outline-none"
      >
        Reintentar
      </button>
    </div>
    );
}

export default AvisoError;