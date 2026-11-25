import { useEffect, useState } from "react";
import Encabezado from "./components/Encabezado";
import Barralateral from "./components/BarraLateral";
import ListaMensajes from "./components/ListaMensajes";
import CajaTexto from "./components/CajaTexto";
import AvisoError from "./components/AvisoError.tsx";
import { type MensajeProps } from "./components/Mensaje";
import { enviarMensaje } from "./api/chat";

const CLAVE_STORAGE = "chef-ai-mensajes";

const BIENVENIDA: MensajeProps[] = [
  { autor: "ia", texto: "¡Hola! Soy Chef AI. ¿Qué tienes en la cocina hoy?" },
];

// Lee la conversación guardada (solo se ejecuta una vez, al iniciar).
function cargarGuardados(): MensajeProps[] {
  try {
    const guardado = localStorage.getItem(CLAVE_STORAGE);
    return guardado ? JSON.parse(guardado) : BIENVENIDA;
  } catch {
    return BIENVENIDA;
  }
}

function App() {
  // ESTADO LEVANTADO: vive en App porque lo usan ListaMensajes y CajaTexto.
  const [mensajes, setMensajes] = useState<MensajeProps[]>(cargarGuardados);
  const [cargando, setCargando] = useState(false);
  const [error, setError] = useState<string | null>(null);

  // useEffect SÍ: sincronizar con algo externo (localStorage).
  useEffect(() => {
    localStorage.setItem(CLAVE_STORAGE, JSON.stringify(mensajes));
  }, [mensajes]);

  // Pide la respuesta del chatbot (petición AJAX con fetch).
  async function pedirRespuesta(historial: MensajeProps[]) {
    setCargando(true);
    setError(null);
    try {
      const respuesta = await enviarMensaje(historial);
      setMensajes([...historial, { autor: "ia", texto: respuesta }]);
    } catch (err) {
      setError(err instanceof Error ? err.message : "Ocurrió un error inesperado");
    } finally {
      setCargando(false);
    }
  }

  // useEffect NO: enviar es respuesta a un evento, va en el manejador.
  function manejarEnviar(texto: string) {
    const nuevoHistorial: MensajeProps[] = [...mensajes, { autor: "usuario", texto }];
    setMensajes(nuevoHistorial);
    pedirRespuesta(nuevoHistorial);
  }

  function reintentar() {
    pedirRespuesta(mensajes);
  }

  function nuevaConversacion() {
    setMensajes(BIENVENIDA);
    setError(null);
  }

  return (
    <div className="flex h-screen bg-white text-slate-900">
      <Barralateral />
      <main className="flex flex-1 flex-col">
        <Encabezado titulo="Chef AI" onNuevaConversacion={nuevaConversacion} />
        <div className="flex-1 overflow-y-auto">
          <ListaMensajes mensajes={mensajes} escribiendo={cargando} />
        </div>
        {error && <AvisoError mensaje={error} onReintentar={reintentar} />}
        <CajaTexto onEnviar={manejarEnviar} deshabilitado={cargando} />
      </main>
    </div>
  );
}

export default App;