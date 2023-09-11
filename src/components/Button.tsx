import "./Button.css";

export interface Props {
  message: string;
}

export function Button({ message }: Props) {
  return (
    <div className="button">
      <button>{message}</button>
    </div>
  );
}
