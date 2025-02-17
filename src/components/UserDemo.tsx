
type usersDemo = {
  users: { id: number; name: string; email: string; age: number }[];
};

const UserDemo = ({users}: usersDemo) => {
  return (
      <div>
          {users.map((user, index) => {
              const { name, email, age } = user;
              return <div>
                  <h1>{name}</h1>
                  <p>{email}</p>
                  <p>{age}</p>
              </div>
          })}
    </div>
  )
}

export default UserDemo