import type { ZodTypeAny, ZodEffects, ZodNumber } from 'zod';
import { z } from 'zod';

type DeepPartial<T> = {
  [P in keyof T]?: T[P] extends object ? DeepPartial<T[P]> : T[P];
};

export function safeParse<TSchema extends z.ZodTypeAny>(
  schema: TSchema,
  value?: DeepPartial<z.input<TSchema>>,
): z.output<TSchema> | undefined {
  const result = schema.safeParse(value);

  if (!result.success) {
    return undefined;
  }

  return result.data;
}

export function numberInput(
  schema: ZodNumber,
): ZodEffects<ZodNumber, z.infer<typeof schema>, string> {
  return numberish(schema as ZodNumber) as ZodEffects<ZodNumber, z.infer<typeof schema>, string>;
}

export function numberish<T extends ZodTypeAny>(schema: T) {
  return z.preprocess((value) => {
    if (typeof value === 'string' && value !== '' && !Number.isNaN(Number(value))) {
      return Number(value);
    }

    if (typeof value === 'number') {
      return value;
    }

    return undefined;
  }, schema);
}
