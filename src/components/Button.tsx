import "./Button.css";

export interface Props {
  message: string;
  color?: string;
  type?: string;
}

export function Button({ message, color, type }: Props) {
  return (
    <div className="button">
      <button id={color} type={type ? "submit" : "button"}>
        {message}
      </button>
    </div>
  );
}
