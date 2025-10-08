interface InputProps {
  placeholder?: string;
  type?: "password" | "text" | "email";
  value: any;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  size?: "sm" | "md" | "lg";
}
export const Input = ({
  placeholder,
  type,
  value,
  onChange,
  size = "md",
}: InputProps) => {
  const sizeClasses = {
    sm: "w-[172px] h-[37px] rounded-[8px] text-sm",
    md: "w-[255px] h-[37px] rounded-[8px] text-base",
    lg: "w-[347px] h-[62px] rounded-[8px] text-lg",
  };
  return (
    <input
      placeholder={placeholder}
      type={type}
      value={value}
      onChange={onChange}
      className={`border-3 border-black rounded-[8px] font-bold placeholder-gray-400 text-center ${sizeClasses[size]}`}
    />
  );
};
