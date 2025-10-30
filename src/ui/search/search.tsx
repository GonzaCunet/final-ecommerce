import { Input } from "@/ui/input/input";
import { Button } from "../button/button";
import { SetStateAction } from "react";

interface SearchProps {
  inputValue: string;
  setInputValue: (value: SetStateAction<string>) => void;
  handleButtonInput: () => void;
}
export default function SearchComponent({
  inputValue,
  setInputValue,
  handleButtonInput,
}: SearchProps) {
  return (
    <div className="flex flex-col xl:flex-row gap-5">
      <Input
        className="!bg-white"
        placeholder="Encontrá tu producto ideal"
        type="text"
        value={inputValue}
        onChange={(e) => {
          setInputValue(e.target.value);
        }}
      />
      <Button
        variant="yellow"
        className="!text-black !font-bold"
        onClick={handleButtonInput}
      >
        Buscar
      </Button>
    </div>
  );
}
