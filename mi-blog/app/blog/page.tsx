import Link from "next/link";
import { getPosts } from "../lib/posts";

export default async function BlogPage() {
    const posts = await getPosts();
    return (
        <ul>
            {posts.map((p) => (
                <li key={p.slug}>
                    <Link href={`/blog/${p.slug}`}>{p.titulo}</Link>
                </li>
            ))}
        </ul>
    );
}