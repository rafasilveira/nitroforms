import { ObjectType, Field, InputType } from 'type-graphql'

@ObjectType()
export class Hello {
  @Field()
  greeted: string
}

@InputType()
export class HelloFilter {
  @Field()
  name?: string
}
