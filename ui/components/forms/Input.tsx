import { ComponentPropsWithoutRef, forwardRef } from "react";
import { FieldGroup } from "./FieldGroup";
import classNames from "classnames";

export interface InputProps extends ComponentPropsWithoutRef<"input"> {
  label?: string;
  error?: boolean;
}

export const BaseInput = forwardRef<HTMLInputElement, InputProps>(function BaseInput(
  { id, className, disabled, error = false, label, placeholder, ...props },
  ref,
) {
  const classes = classNames(
    "border border-transparent outline-none rounded p-2 focus:ring-2 shadow-sm",
    {
      "focus:ring-primary": !disabled && !error,
      "focus:ring-transparent border-error": !disabled && error,
      "bg-base-200": disabled,
    },
    className,
  );

  return <input className={classes} disabled={disabled} placeholder={placeholder} id={id} {...props} ref={ref} />;
});

export const Input = forwardRef<HTMLInputElement, InputProps>(function Input({ id, disabled, label, ...props }, ref) {
  return (
    <FieldGroup id={id} label={label} disabled={disabled}>
      <BaseInput {...props} ref={ref} />
    </FieldGroup>
  );
});
