import { Arg, Authorized, Query, Resolver } from 'type-graphql'
import { Form, FormFilter } from '../schema/form.schema'
import _ from 'lodash'
import { ObjectId } from 'mongodb'
import { collections } from '../service/database.service'

@Resolver(Form)
export class FormsResolver {


  @Authorized()
  @Query(() => [Form])
  async formSubmissions(
    /** this decorator tells type-graphql to add this argument `filter` method on the schema */
    @Arg('filter', { nullable: true })
    filter?: FormFilter
  ): Promise<Form[]> {


    const query = _.omitBy(
      {
        _id: filter?.id ? new ObjectId(filter.id) : null,
        teamId: filter?.teamId ? new ObjectId(filter.teamId) : null,
      },
      _.isNil
    )

    const data = await collections.forms?.find<Form>(query).toArray()

    return data ?? []
  }
}
