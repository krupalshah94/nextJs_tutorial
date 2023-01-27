function Blog({ users }) {
  return (
    <div>
      {users.map((data) => {
        return <p key={data.id}>{data.name}</p>;
      })}
    </div>
  );
}
export default Blog;
export async function getStaticProps() {
  const response = await fetch('https://jsonplaceholder.typicode.com/users');
  const data = await response.json();
  return {
    props: {
      users: data,
    },
  };
}
