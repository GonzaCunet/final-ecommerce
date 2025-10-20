"use client";
import Image from "next/image";
import { Card } from "@/ui/card/card";
import { Input } from "@/ui/input/input";
import { Button } from "@/ui/button/button";
import Link from "next/link";
import useSWR from "swr";
import { useProductSearch } from "./../../Hooks/useSearchProduct";

export default function Search() {
  const { data, error, isLoading } = useProductSearch({
    search: "table",
    limit: 10,
    offset: 0,
  });
  {
    console.log(data);
  }

  return (
    <div className="w-full h-full bg-white text-black flex flex-col items-center justify-between gap-5 ">
      <div>
        {data.map((r: any) => {
          return <span>{r.name}</span>;
        })}
      </div>
      <h1>hola soy el search</h1>
      <Input
        placeholder="Encontrá tu producto ideal"
        type="text"
        value=""
        onChange={(e) => {
          console.log("hola");
        }}
      />
      <Button variant="blue">Buscar</Button>
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
          <Card
            img="https://media.istockphoto.com/id/1389297600/es/foto/reloj-de-pared-aislado-sobre-un-fondo-blanco-reloj-blanco-redondo-con-agujas-negras-recortadas.jpg?s=612x612&w=0&k=20&c=kfFmeizrhfur7DY65nsmQulJpJQUgcdvvOomW_gD0xE="
            title="Relojazo"
            price={250}
          />
        </div>
        <Link href="/search"> Ver más...</Link>
      </div>
    </div>
  );
}
