type HorizontalPosition = "left" | "center" | "right";
type VerticalPosition = "top" | "center" | "bottom";

type ToastProps = {
  position:
    | Exclude<`${HorizontalPosition}-${VerticalPosition}`, "center-center">
    | "center";
};

function Toast({ position }: ToastProps) {
  return (
    <div>
      <h1>toast position {position}</h1>
    </div>
  );
}

export default Toast;
