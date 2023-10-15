import classNames from "classnames";
import type { ReactNode } from "react";
import { createElement } from "react";

export interface ScreenReaderTextProps {
  as?: "caption" | "h1" | "h2" | "h3" | "label" | "p" | "span";
  children: ReactNode;
  className?: string;
}

export function ScreenReaderText({ as = "span", children, className, ...props }: ScreenReaderTextProps) {
  const classes = classNames("sr-only", className);

  return createElement(as, { ...props, className: classes }, children);
}
