import { Button } from "@/ui/button/button";

export function Header() {
  return (
    <header className="bg-black w-full h-full flex justify-between items-center p-8 text-white">
      <a href="/">
        <img src="/logo.svg" className="invert" />
      </a>
      <Button variant="pink" size="sm" className="hidden xl:block">
        INGRESAR
      </Button>
      <img src="/burguer.svg" className="h-[52px] w-[40px] xl:hidden" />
    </header>
  );
}
