import { useState } from "react";

type AuthUser = {
  name: string;
  email: string;
};

function User() {
  const [user, setUser] = useState<AuthUser>({} as AuthUser);

  const handleLogin = () => {
    setUser({
      name: "harshit",
      email: "harshit@gmail.com",
    });
  };

  const handleLogout = () => {};
  return (
    <div>
      <button onClick={handleLogin}>login</button>
      <button onClick={handleLogout}>logout</button>
      <h1>user name is: {user.name}</h1>
      <h1>user email is: </h1>
    </div>
  );
}

export default User;
