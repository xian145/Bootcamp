# NextAuth.js

In this project we will use NexrAuth.js to simulate a login sesion.
To install the dependencies from NextAuth.js we run thi in tehe terminal

```
npm install next-auth @next-auth/prisma-adapter nodemailer
```

Now in the file .env (not shown in the repo bc its private) will put this

```
EMAIL_SERVER=smtp://user:pass@smtp.mailtrap.io:465
EMAIL_FROM=Your name <you@email.com>
NEXTAUTH_URL=http://localhost:3000
SECRET=<ENTER A UNIQUE STRING HERE>
```

Where secrete is a secrete pasword, can be generated [here](https://generate-secret.vercel.app/32).

In Email_Server we put the information we get from Mailtrap.

To test this library we use [Mailtrap](https://mailtrap.io/home)

Press start to create a new inbox and there you can pick any technology you want to test. from there in this project used the SMTP, we show credential to know what is require to enter a SMTP server, those datail will be in .env
