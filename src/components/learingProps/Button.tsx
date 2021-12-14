type ButtonProps = {
  handleClick: () => void;
};

// !also mouse events and second argument pass

function Button({ handleClick }: ButtonProps) {
  return (
    <div>
      <button onClick={handleClick}>click</button>
    </div>
  );
}

export default Button;
