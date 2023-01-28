import { useRouter } from 'next/router';

function PostDetails({ post }) {
  const router = useRouter();
  if (router.isFallback) {
    return <h1>loading ....</h1>;
  }
  return <div>{post.title}</div>;
}

export default PostDetails;

export async function getStaticPaths() {
  //   const response = await fetch(
  //     'https://jsonplaceholder.typicode.com/posts'
  //   );
  //   const posts = await response.json();

  //   const paths = posts.map(data => {
  //     return {
  //         params: {
  //             postId: `${data.id}`
  //         }
  //     }
  //   })
  return {
    paths: [
      {
        params: { postId: '1' },
      },
      {
        params: { postId: '2' },
      },
      {
        params: { postId: '3' },
      },
    ],
    fallback: true,
  };
}

export async function getStaticProps(context) {
  const { params } = context;
  const response = await fetch(
    `https://jsonplaceholder.typicode.com/posts/${params.postId}`
  );
  const data = await response.json();
  if (!data.id) {
    return {
      notFound: true,
    };
  }
  console.log('generating html for ', params.postId);
  return {
    props: {
      post: data,
    },
  };
}
