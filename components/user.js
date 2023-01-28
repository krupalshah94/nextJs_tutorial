function Users({ users }) {
  return (
    <div>
      {users.map((data) => {
        return <p key={data.id}>{data.name}</p>;
      })}
    </div>
  );
}

export default Users;
