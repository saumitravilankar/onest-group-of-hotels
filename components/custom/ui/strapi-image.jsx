import { getStrapiMedia } from "@/utils/helpers";
import Image from "next/image";

export function StrapiImage({ src, alt, height, width, className }) {
  const imageUrl = getStrapiMedia(src);
  if (!imageUrl) return null;

  return (
    <Image
      src={imageUrl}
      alt={alt}
      height={height}
      width={width}
      className={className}
    />
  );
}
