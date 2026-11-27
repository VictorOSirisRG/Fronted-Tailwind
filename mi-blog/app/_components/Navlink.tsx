"use client";

import Link from "next/link"
import { usePathname } from "next/navigation";


export function NavLink({
    href,
    children,
}:{
 href:string;
children:React.ReactNode;
}){
    const activo = usePathname()==href;
    return(
        <Link
        href={href}
        style={{fontWeight:activo?"bold":"normal"}}>
            {children}
        </Link>
    )
}