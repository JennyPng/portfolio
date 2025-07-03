import { getAllPosts } from '../../../lib/posts';
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
    {
        allPostsData.map(({slug, date, title, excerpt}) => {
            const cardProps = {
                title: title,
                description: excerpt,
            }

            return (
            <a href={`/blog/${slug}`} key={slug}><Card {...cardProps} className="hover:cursor-pointer">

            </Card></a>)
        })
    }

    {/* <ul>
      {allPostsData.map(({ slug, date, title }) => (
        <li key={slug}>
          {title}
          <br />
          {slug}
          <br />
          {date}
          {content}
        </li>
      ))}
    </ul> */}
    </div>
  );
}
