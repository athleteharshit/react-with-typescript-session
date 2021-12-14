type HeadingProps = {
  children: string;
};

function Heading({ children }: HeadingProps) {
  return (
    <div>
      <h1>{children}</h1>
    </div>
  );
}

export default Heading;
