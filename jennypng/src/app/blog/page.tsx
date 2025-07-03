import { getAllPosts } from '../../../lib/posts';

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
    <ul>
      {allPostsData.map(({ slug, date, title }) => (
        <li key={slug}>
          {title}
          <br />
          {slug}
          <br />
          {date}
        </li>
      ))}
    </ul>
    </div>
  );
}
