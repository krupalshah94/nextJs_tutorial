import Link from 'next/link';

function Post({ posts }) {
  return (
    <div>
      {posts.map((post, i) => {
        return (
          <div key={`post_${i}`}>
            <Link href={`post/${post.id}`} passHref>
              <h1>
                {post.id} {post.title}
              </h1>
              <hr />
            </Link>
          </div>
        );
      })}
    </div>
  );
}

export default Post;

export async function getStaticProps() {
  const response = await fetch('https://jsonplaceholder.typicode.com/posts');
  const posts = await response.json();

  return {
    props: {
      posts: posts.slice(0, 3),
    },
  };
}
