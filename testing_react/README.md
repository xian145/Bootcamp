to create  new procet with react, we need to run this in the terminal

```
npm create vite@latest
```

will ask for:
-name
-framework
-variant that will be js
After that, in the terminal we gonna change folder to the new one created with the name we put them and run the next lines:

```
npm install
```

```
npm run dev
```

if working in more than one place, pls run in every place the "npm install" inside the project folder

if i want to add tailwindcss to the project we need to run this in the terminal inside of the project folder.

```
npm install -D tailwindcss postcss autoprefixer
```

then

```
npx tailwindcss init -p
```

search for tailwind.config.cjs and add this in the contet field.
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
then we look for the file index.css remove everything and add this three lines
@tailwind base;
@tailwind components;
@tailwind utilities;
look for the app.css file and eliminaate that