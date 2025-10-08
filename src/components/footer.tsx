import { Button } from "@/ui/button/button";
import Link from "next/link";

export function Footer() {
  return (
    <div>
      <Link href="/">ingresar</Link>
      <Link href="/">mi perfil</Link>
      <Link href="/">buscar</Link>
      <Link href="/">Logout</Link>
    </div>
  );
}
