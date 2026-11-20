import Encabezado from "./components/Encabezado";
import Barralateral from "./components/BarraLateral";
import ListaMensajes from "./components/ListaMensajes";
import CajaTexto from "./components/CajaTexto";
import { type MensajeProps } from "./components/Mensaje";

const mensajes: MensajeProps[] =[
  { autor: "usuario", texto: "Hola, ¿qué cocino hoy?" },
  { autor: "ia", texto: "¡Hola! ¿Tienes plátanos en casa?" },
  { autor: "usuario", texto: "Sí, tengo tres." },
  { autor: "ia", texto: "Perfecto, hagamos un mangú." },
];

function App(){
  return(
    <div className="flex h-screen bg-white text-slate-900">
      <Barralateral/>
      <main className="flex flex-1 flex-col">
        <Encabezado titulo="Chef AI"/>
        <div className="flex-1 overflow-y-auto">
          <ListaMensajes mensajes={mensajes} />
        </div>
        <CajaTexto/>
      </main>
    </div>
  );
}

export default App;