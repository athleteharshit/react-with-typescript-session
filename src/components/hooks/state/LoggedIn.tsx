import { useState } from "react";

function LoggedIn() {
  const [isLogged, setIsLogged] = useState(false);

  const handleLogin = () => {
    setIsLogged(true);
  };

  const handleLogout = () => {
    setIsLogged(false);
  };
  return (
    <div>
      <button onClick={handleLogin}>login</button>
      <button onClick={handleLogout}>logout</button>
      <h1>{isLogged ? "logged in" : "logged out"}</h1>
    </div>
  );
}

export default LoggedIn;
