import { ComponentPropsWithoutRef, forwardRef } from 'react';
import { FieldGroup } from './FieldGroup';
import classNames from 'classnames';

export interface TextAreaProps extends ComponentPropsWithoutRef<'textarea'> {
  label?: string;
  error?: boolean;
}

export const BaseTextArea = forwardRef<HTMLTextAreaElement, TextAreaProps>(function BaseTextArea(
  { id, className, disabled, error = false, label, placeholder, ...props },
  ref,
) {
  const classes = classNames(
    'border border-transparent outline-none rounded p-2 focus:ring-2 shadow-sm',
    {
      'focus:ring-primary': !disabled && !error,
      'focus:ring-transparent border-error': !disabled && error,
      'bg-base-200': disabled,
    },
    className,
  );

  return (
    <textarea
      className={classes}
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
