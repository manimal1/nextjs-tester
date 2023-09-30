import { ComponentPropsWithoutRef, forwardRef } from 'react';
import { FieldGroup } from './FieldGroup';

export interface TextAreaProps extends ComponentPropsWithoutRef<'textarea'> {
  label?: string;
}

export const BaseTextArea = forwardRef<HTMLTextAreaElement, TextAreaProps>(function BaseTextArea(
  { id, className, disabled, label, placeholder, ...props },
  ref,
) {
  return (
    <textarea
      className="border border-transparent outline-none rounded p-2 focus:ring-2 focus:ring-offset-base-100 focus:ring-primary shadow-sm"
      disabled={disabled}
      placeholder={placeholder}
      id={id}
      {...props}
      ref={ref}
    />
  );
});

export const TextArea = forwardRef<HTMLTextAreaElement, TextAreaProps>(function TextArea(
  { id, disabled, label, ...props },
  ref,
) {
  return (
    <FieldGroup id={id} label={label} disabled={disabled}>
      <BaseTextArea {...props} ref={ref} />
    </FieldGroup>
  );
});
