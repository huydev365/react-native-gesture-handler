export declare function toArray<T>(object: T | T[]): T[];
export declare type withPrevAndCurrentMapFn<T, Transformed> = (
  previous: Transformed | null,
  current: T
) => Transformed;
export declare function withPrevAndCurrent<T, Transformed>(
  array: T[],
  mapFn: withPrevAndCurrentMapFn<T, Transformed>
): Transformed[];
export declare function hasProperty(
  object: Record<string, unknown>,
  key: string
): boolean;
export declare function isJestEnv(): boolean;
