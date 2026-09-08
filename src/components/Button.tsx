import Link from "next/link";
import type { AnchorHTMLAttributes, ButtonHTMLAttributes } from "react";

type Variant = "primary" | "accent" | "soft" | "secondary";

const variantClass: Record<Variant, string> = {
  primary: "btn-primary",
  accent: "btn-accent",
  soft: "btn-soft",
  secondary: "btn-secondary",
};

type Common = {
  variant?: Variant;
  className?: string;
};

type ButtonAsButton = Common &
  ButtonHTMLAttributes<HTMLButtonElement> & {
    href?: undefined;
  };

type ButtonAsLink = Common &
  AnchorHTMLAttributes<HTMLAnchorElement> & {
    href: string;
  };

export function Button(props: ButtonAsButton | ButtonAsLink) {
  const { variant = "primary", className = "", ...rest } = props;
  const classes = `btn ${variantClass[variant]} ${className}`.trim();

  if ("href" in rest && rest.href) {
    const { href, ...linkProps } = rest;
    return <Link href={href} className={classes} {...linkProps} />;
  }

  return <button className={classes} {...(rest as ButtonHTMLAttributes<HTMLButtonElement>)} />;
}
