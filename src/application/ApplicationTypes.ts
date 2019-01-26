export type ID = string;

export type StrictRecord<Key extends string, Value> = Record<
  Key,
  Value | undefined
>;
