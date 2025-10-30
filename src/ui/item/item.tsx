import { Button } from "../button/button";
import { useRouter } from "next/navigation";
interface itemProps {
  img: string;
  title: string;
  price: number;
  onClick: () => void;
}

export const Item = ({ img, title, price, onClick }: itemProps) => {
  const router = useRouter();
  return (
    <div className="bg-white flex flex-col xl:flex-row items-center justify-center w-full h-full overflow-hidden pb-4">
      <div className="flex-shrink-0 p-10">
        <img
          src={img}
          alt={title}
          className="w-[315px] h-[237px] object-cover xl:w-[808px] xl:h-[384px]"
        />
      </div>

      <div className="flex flex-col justify-between items-center xl:items-start bg-white w-full h-full gap-4 xl:p-5">
        <span className="text-black font-extrabold text-[20px] whitespace-normal break-words flex-1 ">
          {title}
        </span>
        <span className="text-black font-extrabold text-[20px] flex-shrink-0">
          ${" " + price}
        </span>
        <Button
          className="bg-primary-light-blue-700 !text-black !font-extrabold text-[20px] flex-shrink-0"
          onClick={onClick}
        >
          Comprar
        </Button>
        <span className="text-black w-[316px] h-[76px]">
          Descripción: Lorem ipsum dolor sit amet, consectetur adipiscing elit,
          sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
          enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi
          ut aliquip ex ea commodo consequat.
        </span>
      </div>
    </div>
  );
};
