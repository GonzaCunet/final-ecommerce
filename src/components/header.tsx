"use client";
import { Button } from "@/ui/button/button";
import { useState } from "react";

export function Header() {
  const [open, setOpen] = useState(false);

  function handleBurguerMenu() {
    setOpen(!open);
  }

  return (
    <header className="bg-black w-full h-full flex justify-between items-center p-8 text-white relative">
      <a href="/">
        <img src="/logo.svg" className="invert" />
      </a>
      <Button variant="pink" size="sm" className="hidden xl:block">
        INGRESAR
      </Button>
      <img
        src="/burguer.svg"
        className="h-[52px] w-[40px] xl:hidden"
        onClick={handleBurguerMenu}
      />
      {open && (
        <div className="absolute top-full right-0 bg-black w-full p-4 z-50 text-center font-bold flex flex-col gap-5">
          <h1>Ingresar</h1>
          <h1>Mi perfil</h1>
          <h1>Buscar</h1>
        </div>
      )}
    </header>
  );
}
