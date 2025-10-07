import Image from "next/image";
import { Card } from "@/ui/card/card";
import { Input } from "@/ui/input/input";

export default function Home() {
  return (
    <div>
      hola soy la página
      <Card
        img="https://media.istockphoto.com/id/1389297600/es/foto/reloj-de-pared-aislado-sobre-un-fondo-blanco-reloj-blanco-redondo-con-agujas-negras-recortadas.jpg?s=612x612&w=0&k=20&c=kfFmeizrhfur7DY65nsmQulJpJQUgcdvvOomW_gD0xE="
        title="Relojazo"
        price={250}
      />
      <Input placeholder="PlaceHolder" type="text" value="" />
    </div>
  );
}
