import classnames from "classnames";
import { ReactNode } from "react";
import NextLink from "next/link";

export function Link({
  children,
  className,
  disabled = false,
  href,
  ...props
}: {
  children: ReactNode;
  href: string;
  className?: string;
  disabled?: boolean;
}) {
  const classes = classnames(`cursor-pointer`, {
    "text-gray-200 cursor-not-allowed": disabled,
    "hover:text-primary title": !disabled,
  });

  return (
    <NextLink href={href} className={className} {...props}>
      <span className={classes}>{children}</span>
    </NextLink>
  );
}
