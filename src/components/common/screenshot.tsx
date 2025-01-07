import Image from "next/image";

interface ScreenshotProps {
  src: string;
  alt: string;
  width?: number;
  height?: number;
  priority?: boolean;
}

export const Screenshot = ({
  src,
  alt,
  width = 1920,
  height = 1080,
  priority = false,
}: ScreenshotProps) => (
  <div className="relative overflow-hidden rounded-xl border border-gray-200 bg-gray-100 shadow-lg dark:border-gray-700 dark:bg-gray-800">
    <Image
      src={src}
      alt={alt}
      width={width}
      height={height}
      priority={priority}
      className="w-full"
      loading="lazy"
    />
    {/* Optional Hover Effect */}
    <div className="absolute inset-0 bg-gradient-to-t from-black/10 to-transparent opacity-0 transition-opacity duration-300 hover:opacity-100" />
  </div>
);
