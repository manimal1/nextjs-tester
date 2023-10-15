import { ComponentPropsWithoutRef, forwardRef } from "react";
import { FieldGroup } from "./FieldGroup";

// TODO: Add support for min, max, and step, and other number input attributes
// Use a third-party library for this

export interface NumberInputProps extends ComponentPropsWithoutRef<"input"> {
  label?: string;
}

export const BaseNumberInput = forwardRef<HTMLInputElement, NumberInputProps>(function BaseNumberInput(
  { id, className, disabled, label, placeholder, ...props },
  ref,
) {
  return (
    <input
      className="border border-transparent outline-none rounded p-2 focus:ring-2 focus:ring-offset-base-100 focus:ring-primary shadow-sm"
      disabled={disabled}
      placeholder={placeholder}
      id={id}
      type="number"
      {...props}
      ref={ref}
    />
  );
});

export const NumberInput = forwardRef<HTMLInputElement, NumberInputProps>(function NumberInput(
  { id, disabled, label, ...props },
  ref,
) {
  return (
    <FieldGroup id={id} label={label} disabled={disabled}>
      <BaseNumberInput {...props} ref={ref} />
    </FieldGroup>
  );
});
