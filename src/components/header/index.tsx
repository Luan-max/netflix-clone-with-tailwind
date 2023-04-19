import Image from "next/image";

type HeaderItemProps = {
  title: string;
};

interface HeaderProps {
  items: HeaderItemProps[];
}

export default function Header({ items }: HeaderProps) {
  return (
    <div className="flex w-full justify-between px-8 py-4">
      <div className="flex items-center justify-center">
        <Image src="/logo.svg" width={100} height={100} alt="Netflix Logo" />
        {items.map((item, index) => (
          <a
            key={index}
            className={`${
              item.title === "Start" ? "font-bold" : "font-normal"
            } pl-8 text-sm text-white`}
            href=""
          >
            {item.title}
          </a>
        ))}
      </div>
      <div className="flex items-center justify-center">
        <Image src="/bell.svg" width={24} height={24} alt="Bell" />
        <Image
          className="ml-6"
          src="/search.svg"
          width={24}
          height={24}
          alt="Search"
        />
      </div>
    </div>
  );
}
