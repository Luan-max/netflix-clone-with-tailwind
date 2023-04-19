import Image from "next/image";
import { Key } from "react";

interface SectionProps {
  title: string;
  className: string;
  items: any;
}

export default function Section({ title, className, items }: SectionProps) {
  return (
    <div className={className}>
      <a href="#" className="flex flex-row gap-1 text-xl text-white font-bold">
        {title} <Image src="/right.svg" alt="Right" width={24} height={24} />
      </a>
      <div className="pt-4 flex flex-row items-start">
        {items.map((item: any, index: Key | null | undefined) => (
          <div
            key={index}
            className="cursor-pointer transition ease-in-out delay-150 duration-300 hover:-translate-y-1 hover:scale-110 ml-6 w-[260px] h-[146px] flex flex-col items-center rounded"
          >
            <Image src={item.image} alt="Series" width={260} height={146} />
          </div>
        ))}
      </div>
    </div>
  );
}
