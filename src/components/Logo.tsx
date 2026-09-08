import Image from "next/image";

type LogoProps = {
  className?: string;
  title?: string;
  variant?: "seal" | "mark";
  priority?: boolean;
};

const sources = {
  seal: { src: "/logo.png", width: 943, height: 943 },
  mark: { src: "/logo-mark.png", width: 793, height: 793 },
} as const;

export function Logo({
  className = "h-16 w-16",
  title = "Sacramento Stars",
  variant = "seal",
  priority = false,
}: LogoProps) {
  const image = sources[variant];

  return (
    <Image
      src={image.src}
      alt={title}
      width={image.width}
      height={image.height}
      className={className}
      priority={priority}
    />
  );
}
