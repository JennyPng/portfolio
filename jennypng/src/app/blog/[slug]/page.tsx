import { getPostBySlug, markdownToHtml } from "../../../../lib/posts"
import markdownStyles from "../../_styles/markdown.module.css";

export default async function BlogPost({
  params,
}: {
  params: Promise<{ slug: string }>
}) {
    const { slug } = await params;
    const post = getPostBySlug(slug)
    return (
         <div
            className="blog-bg items-center justify-center min-h-screen p-4 pb-20 sm:p-20 font-[family-name:var(--font-geist-sans)]"
        >
            <h1 className="ml-[10%] text-2xl font-caveat font-[700]">{post.title}</h1>
            <div
                className={markdownStyles['markdown']}
                dangerouslySetInnerHTML={{ __html: await markdownToHtml(post.content) }}
            />
        </div>
    )
}