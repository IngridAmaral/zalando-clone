export type TAction<T extends string, P> = {
  type: T;
  payload?: P;
};

export function createAction<Type extends string>(
  type: Type
): TAction<Type, void>;
export function createAction<Type extends string, Payload>(
  type: Type,
  payload: Payload
): TAction<Type, Payload>;

export function createAction<Type extends string, Payload>(
  type: Type,
  payload?: Payload
): TAction<Type, Payload> {
  return payload !== undefined ? { type, payload } : { type };
}
