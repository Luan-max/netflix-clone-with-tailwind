import Image, { StaticImageData } from "next/image";

interface ButtonProps {
  label: string;
  image: StaticImageData;
  alt: string;
  className?: string;
  labelClassName?: string;
}

export default function Button({
  label,
  image,
  alt,
  className,
  labelClassName,
}: ButtonProps) {
  return (
    <button className={className}>
      <Image className="" src={image} alt={alt} width={24} height={24} />
      <span className={labelClassName}>{label}</span>
    </button>
  );
}
