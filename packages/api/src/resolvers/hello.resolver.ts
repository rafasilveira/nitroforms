import { Arg, Authorized, Query, Resolver } from 'type-graphql'
import { Hello, HelloFilter } from '../schema/hello.schema'
import { HelloController } from '../controller/hello.controller'

@Resolver()
export class HelloResolver {
  @Authorized()
  @Query(() => Hello)
  async Hello(
    /** this decorator tells type-graphql to add this argument `filter` method on the schema */
    @Arg('filter', { nullable: true })
    filter?: HelloFilter
  ): Promise<Hello> {
    return await HelloController(filter)
  }
}
