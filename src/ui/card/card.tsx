interface CardProps {
  img: string;
  title: string;
  price: number;
}

export const Card = ({ img, title, price }: CardProps) => {
  return (
    <div className="flex flex-col border-4 border-black rounded-[8px] w-[315px] h-[321px] ">
      <div>
        <img
          src={img}
          alt={title}
          className="w-[315px] h-[237px] object-cover"
        />
      </div>

      <div className="flex justify-between p-4 bg-primary-pink w-full h-full">
        <span className="text-black font-extrabold text-[20px]">{title}</span>
        <span className="text-black font-extrabold text-[20px]">
          ${" " + price}
        </span>
      </div>
    </div>
  );
};
