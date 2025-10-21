"use client";
import Image from "next/image";
import { Card } from "@/ui/card/card";
import { Input } from "@/ui/input/input";
import { Button } from "@/ui/button/button";
import Link from "next/link";
import { useProductSearch } from "./../../Hooks/useSearchProduct";
import { useSearchParams, useRouter } from "next/navigation";
import { useEffect, useState } from "react";

export default function Search() {
  const router = useRouter();
  const [searchTerm, setSearchTerm] = useState("");
  const [inputValue, setInputValue] = useState("");
  const [currentPage, setCurrentPage] = useState(0);
  const searchParams = useSearchParams();

  useEffect(() => {
    const query = searchParams?.get("search");
    if (query) {
      setSearchTerm(query);
      setInputValue(query);
    } else {
      setSearchTerm("");
      setInputValue("");
    }
    setCurrentPage(0);
  }, [searchParams]);
  const limit = 3;
  const offset = currentPage * limit;
  const { products, isError, isLoading, total } = useProductSearch({
    search: searchTerm,
    limit,
    offset,
  });
  const handleButtonInput = () => {
    setSearchTerm(inputValue.trim());
    router.push(`/search?search=${encodeURIComponent(inputValue.trim())}`);
  };
  const totalPages = Math.ceil(total / limit);
  return (
    <div className="w-full h-full bg-white text-black flex flex-col items-center justify-between gap-5 p-10 ">
      <div className="flex flex-col gap-5">
        <Input
          placeholder="Encontrá tu producto ideal"
          type="text"
          value={inputValue}
          onChange={(e) => {
            setInputValue(e.target.value);
          }}
        />
        <Button variant="blue" onClick={handleButtonInput}>
          Buscar
        </Button>
      </div>
      <h1 className="font-bold p-2"> Resultados: {total} </h1>
      <div className="flex flex-col xl:flex-row gap-5">
        {products.map((r: any) => {
          return (
            <Card
              key={r.objectID}
              img={r.Images[0].thumbnails.large.url}
              title={r.Name}
              price={r["Unit cost"]}
            />
          );
        })}
      </div>
      {isLoading && <span>Cargando...</span>}
      {searchTerm && totalPages > 1 && (
        <div className="flex justify-center items-center gap-4 mt-8">
          {currentPage > 0 ? (
            <Button
              variant="blue"
              size="sm"
              onClick={() => setCurrentPage(currentPage - 1)}
            >
              Anterior
            </Button>
          ) : (
            <div className="w-[172px] h-[37px] rounded-[8px] bg-gray-300 flex items-center justify-center">
              <span className="text-gray-500 text-sm">Anterior</span>
            </div>
          )}

          <span className="text-gray-600">
            Página {currentPage + 1} de {totalPages}
          </span>

          {currentPage < totalPages - 1 ? (
            <Button
              variant="blue"
              size="sm"
              onClick={() => setCurrentPage(currentPage + 1)}
            >
              Siguiente
            </Button>
          ) : (
            <div className="w-[172px] h-[37px] rounded-[8px] bg-gray-300 flex items-center justify-center">
              <span className="text-gray-500 text-sm">Siguiente</span>
            </div>
          )}
        </div>
      )}
    </div>
  );
}
