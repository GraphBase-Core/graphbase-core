# graphbase-core

## About

Graphbase-core is a library which generates backend resolvers based on GraphQL schema provided by the user.
If you are interested in how you can use it, please check this README file.

## Table of contents

- [About](#about)
- [Installation](#installation)
- [Usage](#usage)
  - [Example Schema](#example-schema)
  - [How to generate backend](#how-to-generate-backend)
  - [How to start generated backend](#how-to-start-generated-backend)
- [Support](#support)
- [License](#license)
- [Contribute](#contribute)

## Installation

To install graphbase-core library you can run:

```
npm i -g graphbase-core
```

## Usage

The only thing that the user should create and provide to the graphbase-core library is the input schema file.

### Example Schema

The example schema could look like this:

```graphql
directive @model on OBJECT

type Person @model {
  firstName: String!
  lastName: String!
  age: Int!
  height: Float
  hasDrivingLicenses: Boolean
  interests: [Interests!]!
}

type Interests @model {
  name: String!
  description: String
}

type Query {
  version: String
}

type Mutation {
  version: String
}

schema {
  query: Query
  mutation: Mutation
}

```

Please remember  that schema must contain schema type with any Query and Mutation type.

### How to generate backend

For all types marked with directive @models graphbase-core library will generate:
  - output schema with all required types, inputs, queries and mutations
  - typescript models 
  - CRUD resolvers
  - routing stucco.json file
  
Default command:
  
```
npm run graphbase-core
```

If you want to specify input schema path you can run:

```
npm run graphbase-core --inputSchema pathToInputSchema
```

After running one of these commands you will get all models and resolvers required to run your backend!

### How to start generated backend

To run your backend you should build your project and then run stucco server. You can do it by running script like this: 

```json
  "scripts": {
    "start": "tsc --build tsconfig.json && dotenv -e .env stucco"
  }
```

#### tsconfig.json configuration

Please, remember to add to your tsconfig.json this two lines:

```json
    "rootDir": "./src",
    "outDir": "./lib",
```

#### .env file

In .env file you should provide link to your mongoDb database like this:

```
DATABASE_URL=mongodb+srv://userName:password@cluster0.nv1zf.mongodb.net/collection-name?retryWrites=true&w=majority
```

If you follow all configuration steps you are ready to run:

```
npm run start
```

After that backend is running on port 8080 and you can execute all CRUD operations to your database!

## Support 

If you have any problem during using graphbase-core library please create an issue or contact me directly:

jedrzejdabrowski.jd@gmail.com

## License

[MIT](https://opensource.org/licenses/MIT) 🕊

## Contribute

1.  Fork this repo
2.  Create your feature branch: git checkout -b feature-name
3.  Commit your changes: git commit -am 'Add some feature'
4.  Push to the branch: git push origin my-new-feature
5.  Submit a pull request
