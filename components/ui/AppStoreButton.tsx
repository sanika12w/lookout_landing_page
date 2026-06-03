import { Apple, ArrowRight } from "lucide-react";
import type { AnchorHTMLAttributes, ReactNode } from "react";
import { APP_STORE_URL } from "@/lib/seo";

export function ExternalAppStoreLink({
  className,
  children,
  ariaLabel = "Download Lookout on the App Store",
  ...props
}: {
  className: string;
  children: ReactNode;
  ariaLabel?: string;
} & Omit<AnchorHTMLAttributes<HTMLAnchorElement>, "href" | "target" | "rel" | "aria-label" | "className">) {
  return (
    <a
      href={APP_STORE_URL}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={ariaLabel}
      className={className}
      {...props}
    >
      {children}
    </a>
  );
}

export function AppStoreButton({ variant = "light" }: { variant?: "light" | "dark" }) {
  const isDark = variant === "dark";

  return (
    <ExternalAppStoreLink
      className={`app-store-button group ${isDark ? "app-store-button-dark" : "app-store-button-light"}`}
    >
      <Apple className="h-5 w-5" />
      <span>Download on App Store</span>
      <ArrowRight className="h-4 w-4 transition group-hover:translate-x-1" />
    </ExternalAppStoreLink>
  );
}
