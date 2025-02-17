
type UserProps = { name: string; age: number;  isRegistered: boolean}

const User = ({name,age,isRegistered}: UserProps) => {
  return (
      <div>
          <h2>{name}</h2>
          <p>{age} years old</p>
          {isRegistered ? <p>Student Registered</p> : <p>Student not registered</p>}
         
    </div>
  )
}

export default User