import {NavLink} from "./Navlink";

export default function Navbar(){
    return(
        <nav style={{display:"flex",gap:16,padding:16}}>
            <NavLink href="/">Inicio</NavLink>
            <NavLink href="/blog">Blog</NavLink>
            <NavLink href="/acerca">Acerca</NavLink>
        </nav>
    )
}