import React from 'react';
import type { FieldPath, FieldValues } from 'react-hook-form';
import { useFormContext, useController } from 'react-hook-form';
import { ErrorMessage, Input as InputBase } from '@/ui';

export interface InputProps<TFieldValues extends FieldValues = FieldValues> {
  name: FieldPath<TFieldValues>;
  label?: string;
  placeholder?: string;
}

export function Input({ name, label, placeholder }: InputProps) {
  const { control, trigger } = useFormContext();
  const { field, fieldState, formState } = useController({ name, control });
  const isError = fieldState.error !== undefined;
  // @ts-ignore
  const errorMessage = isError ? fieldState.error[name].message : null;

  return (
    <div className="mb-4">
      <InputBase
        id={name}
        className="custom-input"
        label={label}
        placeholder={placeholder}
        disabled={formState.isSubmitting}
        {...field}
        onBlur={() => trigger(name)}
      />
      {isError ? <ErrorMessage className="mt-2">{errorMessage}</ErrorMessage> : null}
    </div>
  );
}
