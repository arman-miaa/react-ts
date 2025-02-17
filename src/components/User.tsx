type UserProps = {
  name: string;
  age: number;
  isRegistered: boolean;
  lang: string[];
  user: { name: string; age: number; isRegistered: boolean; lang: string[] };
};

const User = ({ name, age, isRegistered,lang,user }: UserProps) => {
  return (
    <div>
      <h2>{name}</h2>
      <p>{age} years old</p>
      {isRegistered ? <p>Student Registered</p> : <p>Student not registered</p>}
      Speak In...
      {lang.map((language, index) => (
        <span key={index}> {language}</span>
      ))}
      <p>{user.name}</p>
      <p>{user.age}</p>
     
    </div>
  );
};

export default User;

