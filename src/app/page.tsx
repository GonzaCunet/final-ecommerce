"use client";
import Image from "next/image";
import { Card } from "@/ui/card/card";
import { Input } from "@/ui/input/input";
import { Button } from "@/ui/button/button";
import { useState } from "react";
import { useRouter } from "next/navigation";

export default function Home() {
  const [query, setQuery] = useState("");
  const router = useRouter();
  const handleSearch = () => {
    if (query) {
      router.push(`/search?search=${query}`);
    }
  };
  return (
    <div className="w-full h-full bg-white text-black flex flex-col items-center justify-between gap-5 ">
      <h1>El Mejor E-commerce</h1>
      <Input
        placeholder="Encontrá tu producto ideal"
        type="text"
        value={query}
        onChange={(e) => {
          setQuery(e.target.value);
        }}
      />
      <Button variant="blue" onClick={handleSearch}>
        Buscar
      </Button>
      <div
        className="w-full h-full bg-primary-pink text-white font-bold flex flex-col items-center gap-5 p-10
      xl:bg-primary-light-blue xl:text-black "
      >
        <div className="items-center text-center">
          <h1>
            PRODUCTOS <br />
            DESTACADOS
          </h1>
        </div>
        <div className="flex flex-col gap-10 xl:flex-row ">
          <Card
            img="https://media.istockphoto.com/id/1389297600/es/foto/reloj-de-pared-aislado-sobre-un-fondo-blanco-reloj-blanco-redondo-con-agujas-negras-recortadas.jpg?s=612x612&w=0&k=20&c=kfFmeizrhfur7DY65nsmQulJpJQUgcdvvOomW_gD0xE="
            title="Relojazo"
            price={250}
          />
          <Card
            img="https://media.istockphoto.com/id/1389297600/es/foto/reloj-de-pared-aislado-sobre-un-fondo-blanco-reloj-blanco-redondo-con-agujas-negras-recortadas.jpg?s=612x612&w=0&k=20&c=kfFmeizrhfur7DY65nsmQulJpJQUgcdvvOomW_gD0xE="
            title="Relojazo"
            price={250}
          />
        </div>
      </div>
    </div>
  );
}
