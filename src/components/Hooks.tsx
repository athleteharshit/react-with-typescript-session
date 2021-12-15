import DomRef from "./hooks/ref/DomRef";
import LoggedIn from "./hooks/state/LoggedIn";
import User from "./hooks/state/User";

function Hooks() {
  return (
    <div>
      <h1>React hooks</h1>
      {/* <LoggedIn /> */}
      {/* <User /> */}
      {/* type assertion */}
      <DomRef />
    </div>
  );
}

export default Hooks;
