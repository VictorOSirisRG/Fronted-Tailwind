import "./globals.css";
import Navbar from "./_components/Navbar";


export default function RootLayout({
  children
} :{
  children : React.ReactNode;
}){
  return(
    <html lang="es">
    <body>
    <Navbar/>
    {children}
    </body>
    </html>
  )
}