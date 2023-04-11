# Prisma

In this project we'll working with prisma, implemented in next.js, so we initialize a projecte with next.js

```
npx create-next-app@latest tryprisma
```

this will create a project named "tryprisma" so prisma is not install yet, to install primsa we change to the project folder and use:

```
npm install -D prisma
```

with this now we can initiate prisma in the terminal using:

```
npx prisma
```

To setup prisma we run

```c
npx prisma init
```

This will create a folder named "prisma". If we want to use another type of db we change postgreSQL to another one, like "sqlite"
Dont forget to add ".env" in the .gitignore
now on the prisma folder you need to add the model or as we look before in sql the create table, something like this:

```prisma
model Car {
  id         Int      @id @default(autoincrement())
  brand      String
  model      String
  created_at DateTime @default(now())
  bought     Boolean  @default(false)
}
```

For unique items its better to use this syntax bc, autoincrement will only be a easy number and we want to be a squere number, that will be generated randomlly

```prisma
id         Int      @id @default(uuid())
```

As we change our schema.prisma, we need to create a migrate to apply the change, so we use

```
npx prisma migrate dev
```

and give a name so we can rollback if necessary. this will create a bunch of file, just ignore it at the moment
IMPORTNAT!!! every time you change the schema, you need to run npx prisma migrate dev to apply changes

We need to create a folder named "lib" with prisma.js inside of it and add the next lines,

```js
import { PrismaClient } from "@prisma/client";

const globalForPrisma = global;

const prisma = globalForPrisma.prisma || new PrismaClient();

if (process.env.NODE_ENV !== "production") globalForPrisma.prisma = prisma;

export default prisma;
```

this way we initializes prisma client, so now, every time we want to use prisma in a file we use

```js
import prisma from "lib/prisma";
```

and next.js will automatically find it.
As it is in this example project we cannot write SQL directly but we can use server side method or using API routes.

## Basics

### Retrieve all information

```js
const cars = await prisma.car.findMany();
```

findmany() will search for all inside of the database

### Retrieve by data

```js
const cars = await prisma.car.findMany({
  where: {
    brand: 'Ford',
  },
})
we know there a key labeled brand, so we look for it
```

the same way can be used to find something using the primary key "id"

### Adding in table

```js
const car = await prisma.car.create({
  data: {
    brand: "Ford",
    model: "Fiesta",
  },
});
```

ussign "create" you can add something to the table

### Delete by id

```js
await prisma.car.delete({
  where: { id: 1 },
});
```

you can delete with any othe way, like "where:{brand: 'ford'}" to delete all cars that are ford

### Update data

```js
await prisma.car.update({
  where: { id: 1 },
  data: {
    bought: true,
  },
});
```

Using update we can modify the content inside the table, first we look for the element using 'where', then we use 'data' to modify the information
