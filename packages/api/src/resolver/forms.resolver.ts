import { Arg, Authorized, Mutation, Query, Resolver } from 'type-graphql'
import { Form, FormFilterInput, NewFormInput } from '../schema/form.schema'
import _ from 'lodash'
import { ObjectId } from 'mongodb'
import { collections } from '../service/database.service'

@Resolver(Form)
export class FormsResolver {
  /**
   * Get form by id
   * @param id
   * @returns form
   */
  @Query(() => Form)
  async form(@Arg('id') id: string) {
    const data = await collections.forms?.findOne({ _id: new ObjectId(id) })

    if (!data) {
      throw new Error(`Form ${id} not found!`)
    }

    return data
  }

  /**
   * get all forms by team or by project
   * @param filter: object containing `teamId` and/or `projectId`;
   * @returns all forms belonging to a team and/or a project
   */
  @Authorized()
  @Query(() => [Form])
  async getAllForms(
    /** this decorator tells type-graphql to add this argument `filter` method on the schema */
    @Arg('filter', { nullable: true })
    filter?: FormFilterInput
  ): Promise<Form[]> {
    const query = _.omitBy(
      {
        teamId: filter?.teamId ? filter.teamId : null,
        projectId: filter?.projectId ? filter.projectId : null,
      },
      _.isNil
    )

    console.log('query', query)
    const data = await collections.forms?.find<Form>(query).toArray()

    return data ?? []
  }

  @Authorized()
  @Mutation(() => String)
  async newForm(
    // @Arg("newFormData") newFormData: NewFormInput
    @Arg('name') name: string
  ): Promise<string> {

    const form = await collections.forms?.insertOne({
      name,
      teamId: '6254c3bcdd4cc9d95413621f',
      projectId: '6254c599dd4cc9d95413622d',
      createdAt: new Date().toISOString(),
      updatedAt: new Date().toISOString(),
      submissions: [],
    })

    if (form?.acknowledged) {
      return form.insertedId.toString()
    } else {
      throw new Error('Error while inserting form')
    }
  }
}
