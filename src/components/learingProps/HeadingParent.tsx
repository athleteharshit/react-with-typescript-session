type HeadingParentProps = {
  children: React.ReactNode;
};

function HeadingParent({ children }: HeadingParentProps) {
  return <div>{children}</div>;
}

export default HeadingParent;
