import "./Button.css";

export interface Props {
  message: string;
  color?: string;
}

export function Button({ message, color }: Props) {
  return (
    <div className="button">
      <button id={color}>{message}</button>
    </div>
  );
}
