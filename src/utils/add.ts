
export function add(a: number, b: number) {
  return a + b;
}

export function asyncAdd(a: number, b: number) {
  return new Promise<number>(resolve => {
    setTimeout(() => {
      resolve(a + b);
    });
  });
}