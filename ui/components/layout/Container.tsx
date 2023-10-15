import classNames from "classnames";
import type { ComponentPropsWithoutRef } from "react";

export function Container({ className, children }: ComponentPropsWithoutRef<"div">) {
  const classes = classNames("mx-auto px-4 py-4 md:px-6", className);

  return <div className={classes}>{children}</div>;
}
