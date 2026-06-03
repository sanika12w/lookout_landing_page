import Image from "next/image";
import { APP_LOGO } from "@/lib/seo";

export function AppLogo({ size = 40, priority = false }: { size?: number; priority?: boolean }) {
  return (
    <span className={`app-icon-wrap ${size <= 36 ? "small" : ""}`}>
      <Image
        src={APP_LOGO}
        alt="Lookout app icon"
        width={size}
        height={size}
        priority={priority}
        className="app-icon"
      />
    </span>
  );
}
