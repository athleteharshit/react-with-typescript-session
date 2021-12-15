import { useState } from "react";

type AuthUser = {
  name: string;
  email: string;
};

function User() {
  const [user, setUser] = useState(null);

  const handleLogin = () => {};

  const handleLogout = () => {};
  return (
    <div>
      <button onClick={handleLogin}>login</button>
      <button onClick={handleLogout}>logout</button>
      <h1>user name is: </h1>
      <h1>user email is: </h1>
    </div>
  );
}

export default User;

