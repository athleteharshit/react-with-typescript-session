type ButtonProps = {
  handleClick: (e: React.MouseEvent<HTMLButtonElement>) => void;
};

// !also mouse events and second argument pass

function Button({ handleClick }: ButtonProps) {
  return (
    <div>
      <button onClick={(e) => handleClick(e)}>click</button>
    </div>
  );
}

export default Button;
