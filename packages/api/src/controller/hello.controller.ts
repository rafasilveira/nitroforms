import { Hello, HelloFilter } from '../schema/hello.schema'

export const HelloController = (filter: HelloFilter = {}): Promise<Hello> =>
  new Promise((resolve) => {
    // simulating a delay from a db call
    setTimeout(() => {
      const hello = new Hello()
      hello.greeted = filter?.name ?? 'world'

      resolve(hello)
    }, 100)
  })
