type PersonProps = {
  name: {
    firstName: string;
    lastName: string;
  };
};

function Person({ name }: PersonProps) {
  return (
    <div>
      <h1>
        My name is {name.firstName} {name.lastName}
      </h1>
    </div>
  );
}

export default Person;
