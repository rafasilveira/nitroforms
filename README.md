# Nitroforms

This started as a fullstack (Node + GraphQL + React + Relay) code challenge, and evolved into a personal project to capture form submissions.

## Backend

### Stack

Node, Express, Typescript, Express-Graphql, Type-Graphql

### Backlog

- [x] Project configuration
- [x] Database connection
- [x] Form data modeling
- [x] Form CRUD
- [ ] User CRUD
- [ ] Team and Project CRUD
- [ ] Authentication

### Running locally

Start by cloning the repository and installing everything

```bash
gh repo clone rafasilveira/nitroforms
cd nitroforms/backend
yarn install
```

Then, copy `.env.example` and rename it to `.env`. So far, there is no need to fill anything. Later this file will be used to store the database connection credentials.

After that, run the project with `yarn start` and go to [localhost:4000/graphql](localhost:4000/graphql) on your browser.

### Available functionalities

#### Queries
**Get form by id**
Gets a form by its id
```gql
query {
  form(id:"6258b278fa3091f0a068af5f")
  {
    name
    _id
    teamId
    createdAt
    updatedAt
    submissions {
      id
      createdAt
      data {
        key
        value
      }
    }
  }
}
```

**Get all forms by filter**
Gets all forms for the selected team or project. As of right now, there's only one team and only one project, so this filter doesn't do much.

```gql
query {
  getAllForms (
    filter: { teamId: "6254c3bcdd4cc9d95413621f" }
  ) {
    name
    _id
    teamId
    createdAt
    updatedAt
    submissions {
      id
      createdAt
      data {
        key
        value
      }
    }
  }
}
```

#### Mutations

**Create new form**
Creates a new form and returns its id. In the future, it'll be required to provide a team id and a project id.
```gql
mutation {
  newForm (name: "Form teste 01")
}
```

## Frontend

### Stack

React, Relay, Typescript

### Backlog

- [ ] everything, lol
