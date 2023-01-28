import Users from '../../components/user';

function Blog({ users }) {
  return (
    <div>
      <Users users={users} />
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
