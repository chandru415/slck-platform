export const Frozen = () => {
  // eslint-disable-next-line @typescript-eslint/ban-types
  return (constructor: Function) => {
    Object.freeze(constructor);
    Object.freeze(constructor.prototype);
  };
};