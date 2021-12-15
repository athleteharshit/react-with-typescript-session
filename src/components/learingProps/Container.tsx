type ContainerProps = {
  styles: React.CSSProperties;
};

function Container({ styles }: ContainerProps) {
  return <div style={styles}>apply css</div>;
}

export default Container;
