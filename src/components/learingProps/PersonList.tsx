type PersonListProps = {
  names: {
    firstName: string;
    lastName: string;
  }[];
};

function PersonList({ names }: PersonListProps) {
  return (
    <div>
      {names.map((item, index) => (
        <div key={index}>
          <h1>
            {item.firstName} {item.lastName}
          </h1>
        </div>
      ))}
    </div>
  );
}

export default PersonList;
