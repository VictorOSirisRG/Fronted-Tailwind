import Link from "next/link";
import { getPosts } from "../lib/posts";


 export default async function BlogLayout({
    children,
 }:{
    children: React.ReactNode;
 }){
    const posts = await getPosts();
return(
    <div style={{ display: "grid", gridTemplateColumns: "220px 1fr", gap: 24 }}>
      <aside>
        <h3>Posts</h3>
        <ul>
          {posts.map((p) => (
            <li key={p.slug}>
              <Link href={`/blog/${p.slug}`}>{p.titulo}</Link>
            </li>
          ))}
        </ul>
      </aside>
      <main>{children}</main>
    </div>
  );
 }