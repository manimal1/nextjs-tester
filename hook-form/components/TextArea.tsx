import type { FieldPath, FieldValues } from "react-hook-form";
import { useController, useFormContext } from "react-hook-form";
import { ErrorMessage, TextArea as TextAreaBase } from "@/ui";

export interface TextareaProps<TFieldValues extends FieldValues = FieldValues> {
  name: FieldPath<TFieldValues>;
  label?: string;
  placeholder?: string;
}

export function TextArea<TFieldValues extends FieldValues = FieldValues>({
  label,
  placeholder,
  name,
  ...props
}: TextareaProps<TFieldValues>) {
  const { control, trigger } = useFormContext();
  const { field, fieldState, formState } = useController({ name, control });
  const isError = fieldState.error !== undefined;
  // @ts-ignore
  const errorMessage = isError ? fieldState.error[name].message : null;

  return (
    <div className="mb-4">
      <TextAreaBase
        id={name}
        disabled={formState.isSubmitting}
        error={isError}
        placeholder={placeholder}
        label={label}
        {...props}
        {...field}
        onBlur={() => trigger(name)}
      />
      {isError ? <ErrorMessage className="mt-2">{errorMessage}</ErrorMessage> : null}
    </div>
  );
}
