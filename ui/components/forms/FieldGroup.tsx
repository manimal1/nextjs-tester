import classNames from "classnames";
import { ComponentPropsWithoutRef } from "react";

export interface FieldGroupProps extends ComponentPropsWithoutRef<"div"> {
  id?: string;
  label?: string;
  disabled?: boolean;
}

export function FieldGroup({ id, className, disabled, label, children }: FieldGroupProps) {
  const classes = classNames(
    "flex flex-col space-y-4",
    {
      "opacity-50 cursor-not-allowed": disabled,
    },
    className,
  );

  return (
    <div className={classes}>
      {label ? (
        <label htmlFor={id} className="text-base-content">
          {label}
        </label>
      ) : null}
      {children}
    </div>
  );
}
