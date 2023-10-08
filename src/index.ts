// from @nestjs/common
interface Type<T = any> extends Function {
  new (...args: any[]): T
}
// from @nestjs/common
interface Abstract<T = any> extends Function {
  prototype: T
}

export function filter<T extends Type<any> | Abstract<any>>(opts: {
  /** Objects instance of this `for` class will be caught for the given `when` condition. */
  for?: T,
  /** The condition in which the instance of that `for` class are caught. */
  when: (exception: T extends Type<infer E> | Abstract<infer E> ? E : unknown) => boolean,
}): T {
  class DynamicPredicatedBasedClass {
    static [Symbol.hasInstance](instance: unknown) {
      return opts.for
        ? instance instanceof opts.for && opts.when(instance as any)
        : opts.when(instance as any)
    }
  }

  return DynamicPredicatedBasedClass as T
}

