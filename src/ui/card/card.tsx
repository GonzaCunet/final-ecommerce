interface CardProps {
  img: string;
  title: string;
  price: number;
  onClick?: () => void; //
}

export const Card = ({ img, title, price, onClick }: CardProps) => {
  return (
    <div
      className="flex flex-col border-4 border-black rounded-[8px] w-[315px] h-[321px] overflow-hidden cursor-pointer"
      onClick={onClick}
    >
      <div className="flex-shrink-0 h-[237px] overflow-hidden">
        <img src={img} alt={title} className="w-full h-full object-cover" />
      </div>

      <div className="flex justify-between items-start p-4 bg-primary-pink w-full flex-1 min-h-0 min-w-0">
        <span className="text-black font-extrabold text-[20px] whitespace-normal break-words flex-1 pr-4">
          {title}
        </span>
        <span className="text-black font-extrabold text-[20px] flex-shrink-0">
          ${" " + price}
        </span>
      </div>
    </div>
  );
};
