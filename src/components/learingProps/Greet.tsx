type GreetProps = {
  name: string;
  message: number;
  isLogged: boolean;
};


function Greet({ name, message, isLogged }: GreetProps) {
  return (
    <div>
      <h1>
        {isLogged
          ? `${name}. your message count is ${message}`
          : "Welcome guest"}
      </h1>
    </div>
  );
}

export default Greet;
