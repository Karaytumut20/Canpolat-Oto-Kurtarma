import Image from "next/image";

export function BrandLogo({ footer = false }: { footer?: boolean }) {
  return (
    <Image
      className={footer ? "brand-logo brand-logo-footer" : "brand-logo"}
      src="/canpolat-logo-transparent.png"
      alt="Canpolat Oto Çekici ve Oto Kurtarma"
      width={985}
      height={680}
      priority={!footer}
    />
  );
}
