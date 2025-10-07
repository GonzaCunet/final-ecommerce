import { Button } from "@/ui/button/button";

export function Header() {
  return (
    <header className="bg-black w-full h-full flex justify-between items-center p-8 text-white">
      <a href="/">
        <h1>Compralo</h1>
      </a>
      <Button variant="pink" size="sm">
        INGRESAR
      </Button>
    </header>
  );
}
