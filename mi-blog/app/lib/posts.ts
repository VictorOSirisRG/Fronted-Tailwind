import { Carter_One } from "next/font/google";

export type Post={
    slug: string;
    titulo:string;
    contenido:string;
    likes:number;
}

export const posts:Post[] = [
    {slug:"hola-mundo",titulo:"Hola mundo",contenido:"Mi Primer Post",likes:4}, 
     {slug:"nextjs-16",titulo:"Novedades JS 6",contenido:"TurboPack, Framo la bestia del computo.",likes:20}, 
      {slug:"server-components",titulo:"Server Components",contenido:"Los servidroes funcionan",likes:8}, 
]

export async function getPosts(){{
    return posts;
}}

export async function getPost(slug:string){
    return posts.find((p)=>p.slug === slug);
}