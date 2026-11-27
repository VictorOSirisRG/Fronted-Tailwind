import { notFound } from "next/navigation";
import { getPost,getPosts } from "@/app/lib/posts";
import BotonLike from "@/app/_components/BotonLike";


export default async function PostPage({
    params,
}:{
    params:Promise<{slug:string}>;
}){
    const {slug} = await params;
    const post = await getPost(slug);

    if(!post) notFound();

    return(
        <article>
            <h1>{post.titulo}</h1>
            <p>{post.contenido}</p>
            <BotonLike inicial={post.likes}/>
        </article>
    )
}