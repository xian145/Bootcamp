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

```
npx prisma init
```

This will create a folder named "prisma". If we want to use another type of db we change postgreSQL to another one, like "sqlite"
Dont forget to add ".env" in the .gitignore
now on the prisma folder you need to add the model or as we look before in sql the create table, something like this:

```
model Car {
  id         Int      @id @default(autoincrement())
  brand      String
  model      String
  created_at DateTime @default(now())
  bought     Boolean  @default(false)
}
```
As we change our schema.prisma, we need to create a migrate to apply the change, so we use 

```
npx prisma migrate dev
```
and give a name so we can rollback if necessary