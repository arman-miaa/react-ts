import { useState } from "react"

const NewUser = () => {
    const [userName, setUserName] = useState("")

    const handleUserNameChange = (event: React.ChangeEvent<HTMLInputElement>) => {
setUserName(event.target.value)
    }

 const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
   console.log(userName);
 };

  return (
      <div>
          <h2>Create New User</h2>
          <input type="text" placeholder="Enter user name" value={userName} onChange={handleUserNameChange} /> <br />

        <button onClick={handleClick}>Show Name</button>
    </div>
  )
}

export default NewUser