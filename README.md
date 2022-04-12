# Nitroforms

This started as a fullstack (Node + GraphQL + React + Relay) code challenge, and evolved into a personal project to capture form submissions.

## Backend

### Stack

Node, Express, Typescript, Express-Graphql, Type-Graphql

### Backlog

- [x] Project configuration
- [ ] Database connection
- [ ] Form data modeling
- [ ] Authentication
- [ ] User/project handling

### Running locally

Start by cloning the repository and installing everything

```bash
gh repo clone rafasilveira/nitroforms
cd nitroforms/backend
yarn install
```

Then, copy `.env.example` and rename it to `.env`. So far, there is no need to fill anything. Later this file will be used to store the database connection credentials.

After that, run the project with `yarn start` and go to [localhost:4000/graphql](localhost:4000/graphql) on your browser.

### Queries

```gql
query {
  getFormSubmissions(
    filter: {
      id: "123456789123456789123456"
      teamId: "123456789123456789123456"
    }
  ) {
    name
    id
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

## Frontend

### Stack

React, Relay, Typescript

### Backlog

- [ ] everything, lol
