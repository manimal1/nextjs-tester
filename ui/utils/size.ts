export type FixedSize = 3 | 4 | 5 | 6 | 8 | 9 | 10 | 12 | 14 | 16 | 20 | 24 | 32;
export type Size = FixedSize | "full";

export const sizeClasses: Record<Size, string> = {
  3: "h-3 w-3",
  4: "h-4 w-4",
  5: "h-5 w-5",
  6: "h-6 w-6",
  8: "h-8 w-8",
  9: "h-9 w-9",
  10: "h-10 w-10",
  12: "h-12 w-12",
  14: "h-14 w-14",
  16: "h-16 w-16",
  20: "h-20 w-20",
  24: "h-24 w-24",
  32: "h-32 w-32",
  full: "h-full w-full",
} as const;

export const sizeEdgeLengths: Record<FixedSize, number> = {
  3: 12,
  4: 16,
  5: 20,
  6: 24,
  8: 32,
  9: 36,
  10: 40,
  12: 48,
  14: 56,
  16: 64,
  20: 80,
  24: 96,
  32: 128,
} as const;

export const sizeAttributes: Record<Size, { height: number | string; width: number | string }> = {
  3: { height: sizeEdgeLengths[3], width: sizeEdgeLengths[3] },
  4: { height: sizeEdgeLengths[4], width: sizeEdgeLengths[4] },
  5: { height: sizeEdgeLengths[5], width: sizeEdgeLengths[5] },
  6: { height: sizeEdgeLengths[6], width: sizeEdgeLengths[6] },
  8: { height: sizeEdgeLengths[8], width: sizeEdgeLengths[8] },
  9: { height: sizeEdgeLengths[9], width: sizeEdgeLengths[9] },
  10: { height: sizeEdgeLengths[10], width: sizeEdgeLengths[10] },
  12: { height: sizeEdgeLengths[12], width: sizeEdgeLengths[12] },
  14: { height: sizeEdgeLengths[14], width: sizeEdgeLengths[14] },
  16: { height: sizeEdgeLengths[16], width: sizeEdgeLengths[16] },
  20: { height: sizeEdgeLengths[20], width: sizeEdgeLengths[20] },
  24: { height: sizeEdgeLengths[24], width: sizeEdgeLengths[24] },
  32: { height: sizeEdgeLengths[32], width: sizeEdgeLengths[32] },
  full: { height: "100%", width: "100%" },
} as const;
