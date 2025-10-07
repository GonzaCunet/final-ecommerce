interface InputProps {
  placeholder?: string;
  type?: "password" | "text" | "email";
  value: any;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
}
export const Input = ({ placeholder, type, value, onChange }: InputProps) => {
  return (
    <input
      placeholder={placeholder}
      type={type}
      value={value}
      onChange={onChange}
    ></input>
  );
};
