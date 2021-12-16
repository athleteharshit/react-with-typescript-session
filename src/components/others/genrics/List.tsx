type ListProps<T> = {
  items: T[];
  onClick: (value: T) => void;
};

function List<T>({ items, onClick }: ListProps<T>) {
  return (
    <div>
      <h1>genrics</h1>
      {items.map((item, index) => (
        <div key={index}>
          <h1 onClick={() => onClick(item)}>{item}</h1>
        </div>
      ))}
    </div>
  );
}

export default List;
