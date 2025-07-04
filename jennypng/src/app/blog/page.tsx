import { getAllPosts } from '../../../lib/posts';
import BlogPostCard from '../components/blog-post';
import Card from '../components/card';

function getPosts() {
  const allPosts = getAllPosts();

//   const heroPost = allPosts[0];

//   const morePosts = allPosts.slice(1);
    return allPosts;
}

export default function Blog() {
    const allPostsData = getPosts()
  return (
    <div className="items-center justify-center min-h-screen p-4 pb-20 sm:p-20 font-[family-name:var(--font-geist-sans)]">
        <h1>blog</h1>
        <div className="grid grid-cols-1 md:grid-cols-4">
            {
                // TODO new component instead of card
                allPostsData.map(({slug, date, title, excerpt, coverImage}) => {
                    const cardProps = {
                        title: title,
                        description: excerpt,
                        date: date,
                        image: coverImage,
                    }
                    return (
                    <a href={`/blog/${slug}`} key={slug}><BlogPostCard {...cardProps}/>
                    </a>)
                })
            }
        </div>
    </div>
  );
}
