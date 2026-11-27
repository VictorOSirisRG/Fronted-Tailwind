import { Libertinus_Math, Libertinus_Sans } from "next/font/google";
import Link from "next/link";


export default function HomePage(){
  return(
    <main>
      <h1>Bienvenidos al blog</h1>
      <Link href="/blog">Ver todos los posts</Link>
      
    </main>
  )
}
