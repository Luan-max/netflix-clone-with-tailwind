import Image from "next/image";
import { Key } from "react";

type ItemsProps = {
  imageNumber: string;
  image: string;
};

interface SectionProps {
  title: string;
  className: string;
  items: ItemsProps[];
}

export default function SectionTop10Movies({
  title,
  className,
  items,
}: SectionProps) {
  const imagesWidths: any = {
    one: "108.5",
    two: "134.35",
    three: "128.75",
    four: "143.5",
    five: "126.33",
    six: '131.33'
  };

  return (
    <div className={className}>
      <a href="#" className="flex flex-row gap-1 text-xl text-white font-bold">
        {title} <Image src="/right.svg" alt="Right" width={24} height={24} />
      </a>
      <div className="pt-4 flex flex-row items-start">
        {items.map((item: any, index: Key | null | undefined) => (
          <>
            <Image
              key={index}
              src={item.imageNumber}
              alt=""
              width={imagesWidths[item.imageNumber]}
              height={185}
            />
            <Image
              src={item.image}
              alt=""
              width={132}
              height={185}
              className="cursor-pointer transition ease-in-out delay-150 duration-300 hover:-translate-y-1 hover:scale-110 relative right-7"
            />
          </>
        ))}
      </div>
    </div>
  );
}
