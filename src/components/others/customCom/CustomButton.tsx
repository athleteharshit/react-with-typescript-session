// type CustomButtonProps = {
//     variant: "primary" | "secondary";
//     children:string
//   } & Omit<React.ComponentProps<"button">, "children">;

type CustomButtonProps = {
  variant: "primary" | "secondary";
} & React.ComponentProps<"button">;

function CustomButton({ variant, children, ...rest }: CustomButtonProps) {
  return (
    <div>
      <button className={`class-with-${variant}`} {...rest}>
        {children}
      </button>
    </div>
  );
}

export default CustomButton;
