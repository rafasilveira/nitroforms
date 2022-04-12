import { Field, ID, InputType, ObjectType } from 'type-graphql'

@ObjectType()
class FormItem {
  @Field()
  key: string

  @Field()
  value: string
}

@ObjectType()
class FormSubmission {
  @Field(() => ID)
  id: string

  @Field(() => [FormItem])
  data: FormItem[]

  @Field()
  createdAt: string
}

@ObjectType()
export class Form {
  @Field(() => ID)
  id: string

  @Field()
  teamId: string

  @Field()
  name: string

  @Field()
  createdAt: string

  @Field()
  updatedAt: string

  @Field(() => [FormSubmission])
  submissions: FormSubmission[]
}

@InputType()
export class FormFilter {
  @Field()
  id?: string

  @Field()
  teamId?: string
}
