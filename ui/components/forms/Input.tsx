import { ComponentPropsWithoutRef, forwardRef } from 'react';
import { FieldGroup } from './FieldGroup';

export interface InputProps extends ComponentPropsWithoutRef<'input'> {
  label?: string;
}

export const BaseInput = forwardRef<HTMLInputElement, InputProps>(function BaseInput(
  { id, className, disabled, label, placeholder, ...props },
  ref,
) {
  return (
    <input
      className="border border-transparent outline-none rounded p-2 focus:ring-2 focus:ring-offset-base-100 focus:ring-primary shadow-sm"
      disabled={disabled}
      placeholder={placeholder}
      id={id}
      {...props}
      ref={ref}
    />
  );
});

export const Input = forwardRef<HTMLInputElement, InputProps>(function Input(
  { id, disabled, label, ...props },
  ref,
) {
  return (
    <FieldGroup id={id} label={label} disabled={disabled}>
      <BaseInput {...props} ref={ref} />
    </FieldGroup>
  );
});
