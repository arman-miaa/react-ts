import { useState } from "react";

type ButtonStyleProps = {
  btnStyle: React.CSSProperties
};

const ButtonStyle = (props: ButtonStyleProps) => {
    const [user, setUser] = useState(0);
  return (
    <>
      <div style={props.btnStyle}>ButtonStyle</div>
      <h1>{user}</h1>
    </>
  );
}

export default ButtonStyle