# `nestjs-conditional-exception-filter`

[![npm version](https://img.shields.io/npm/v/nestjs-conditional-exception-filter.svg)](https://www.npmjs.com/package/nestjs-conditional-exception-filter)
[![npm downloads](https://img.shields.io/npm/dt/nestjs-conditional-exception-filter.svg)](https://www.npmjs.com/package/nestjs-conditional-exception-filter)

A helper package to allow creating exception filters based on conditions on the exception!

#### Usage

```bash
npm install nestjs-conditional-exception-filter
```

```ts
import { Catch, ExceptionFilter } from '@nestjs/common'
import { filter } from 'nestjs-conditional-exception-filter'

@Catch(
  filter({
    // Define for each instance this filter should be applied.
    // This is optional, so your filter no longer needs to work over class instances only
    for: YourErrorClass, 
    // And add your refined condition in this callback predicate function
    when: (err) => true
  })
)
export class YourFilter implements ExceptionFilter {
  // ...
}
```
