<h1 align="center">CSToken Prisma Schema</h1>

## Postgres database instance
When running doocker-compose, the Postgres database can be pushed from the local Postgres database.
In development a local Postgres instance is used, which is then pushed to the docker runtime instance.
```
npx prisma db push
```
Also the databases can be seeded with:
``` 
npx prisma db seed
```

Use the .env file to set the URL variable and use the env variable in ./src/prisma/schema.prisma and ./src/prisma/seed.ts.
## schema.prisma
```
datasource db {
  provider = "postgresql"
  url      = env("DATABASE_URL")
}

```
## seed.ts
```
  const prismaTest = new PrismaClient({
    datasources: {
      db: {
        url: process.env.DATABASE_TEST_URL
      }
    }
  });
```

<br />

# 🚀 Available Scripts

In the project directory, you can run:
<br />

## ⚡️ dev

```
npm run dev
```

The application depends on a local Postgres database.
If not present the dev command will error.


## Setup a Postgres for dev if not using docker-compose
Use a docker container to ease setup of postgres.
Sometimes users will have local postgres installed. It is not required and a docker container can be used.\
An env variable like this required: DATABASE_URL="postgresql://postgres:password@localhost:5432/cstoken?schema=public"

Check the port for connection, "-p <local port>:<image instance exposed port>" in the run command below.\
Usually 5432:5432 is always used. Postgres uses 5432 as the default exposed port in the running container.
Other local postgres instance could be using port 5432, so review your setup.

```
docker pull postgres:14.6    
docker run --name cstoken -e POSTGRES_PASSWORD=password -d -p 5432:5432 postgres
```
When postgres instance is running in docker container the database can be created with:
```
npx prisma db push
```
The file prisma.schema uses env variable DATABASE_URL.

Seed the database for sample client information.
```
npx prisma db seed
```
The file prisma/seed.ts use ENV variable DATABASE_TEST_URL. It can point to the same postgre instance
above in DATABASE_URL if you want the test and dev instance to be the same database.

<br />

```
npm run generate
```

Runs the nexus prisma code generator.

<br />

## 🧪 test

```
npm run test
```
Launches the test runner.

<br />

## 🦾 Start

Will do the same as npm run dev. Uses ts-node instead of ts-node-dev. 
```
npm run start
```

Starts the app for production uses.\

<br />

# 🧬 Project structure

This is the structure of the files in the project:

```sh
    │
    ├── src                     # source files
    │   ├── api
    │   │   ├── tests           # Tests for GraphQL resolvers
    │   │   │   ├── __helpers.ts
    │   │   │   └── cstoken.test.ts   
    │   │   ├── context.ts      # Nexus schema for local Apollo GraphQL
    │   │   └── server.ts       # Entry point to simple http-server
    │   ├── generated           # Nexus code generation of typedef
    │   ├── lib                 # Apollo client/server and Prisma client
    │   │   └── prismaClient.ts # Prisma client
    │   ├── prisma
    │   │   ├── migrations
    │   │   ├── schema.prisma   # Prisma SQL schema
    │   │   └── seed.ts         # Seed file for tests on dev SQL source
    ├── .eslintrc.js
    ├── .gitignore
    ├── jest-config.js
    ├── kubedb                  # Sh script to rollout to container postgres database
    ├── package.json
    ├── package-lock.json
    ├── README.md
    └── tsconfig.json
```
