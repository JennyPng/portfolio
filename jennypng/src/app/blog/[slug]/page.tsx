import { getPostBySlug, markdownToHtml } from "../../../../lib/posts"
import markdownStyles from "../../_styles/markdown.module.css";
import Link from "next/link";

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
            <Link href="/blog" className="ml-[5%] mb-4 inline-flex items-center gap-2 text-secondary-green hover:underline font-caveat text-lg hover:text-primary-green transition-colors duration-175">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="3" className="inline-block align-middle">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
                </svg>
            </Link>
            <h1 className="ml-[10%] text-2xl font-caveat font-[700]">{post.title}</h1>
            <p className="ml-[10%] text-md font-caveat font-[700]">{new Date(post.date).toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}</p>
            <div
                className={markdownStyles['markdown']}
                dangerouslySetInnerHTML={{ __html: await markdownToHtml(post.content) }}
            />
        </div>
    )
}