# How to create a projects using next.js
To create a project using next.js we use the next command

npx create-next-app@latest my-app

typeScript No
ESlint Yes
src/ direwctory No
exprimental app. directory No
ENTER

When run with "npm run dev" will appear .next folder

to fix the problem with eslint need to replace the content with:   "extends": ["next/babel","next/caore-web-vitals"]

# How to install tailwindscss in a next.js project
If we cant to add Tailwindcss in our project we need to do this in our project folder:

- npm install -D tailwindcss postcss autoprefixer
- npx tailwindcss init -p
- then open tailwind.config.js and add this on content "  
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}","
- now open styles/global.css and add this at the bottom of the file "@tailwind base;
@tailwind components;
@tailwind utilities;"

# How Next.js works

When we create a new js file with a "name" it will automatically create that page in our project, just need to type "localhost:3000/'name'"

## Dynamic URLs

If we want to create a dynamic URL we need to create a file with the dame [id].js to handle this URLs inside of the archive

In the file name, [id] inside the square brackets means that anything that's dynamic will be put inside the id parameter of the query property of the router.

so we need to import the router inside the [id].js file

### Creating static pages with dynamic URLs

- Static data fetching: You can tell Next.js to fetch that content at build time, and generate static pages that are then served to the user without further action. It’s the best of both worlds: your data is dynamic in nature, but you create static pages from it.

### Fetching data in Next.js

when we want to fecth some data to fetch data we can do it in at least 3 ways:
- Server side: this will require a special function provided by next.js (getServerSideProps()) where the server that is hosting our app will fetch the information before the pages is rendered, this will require more time than client side. but sometime this is needed if we need something from a database

- Client side: we let the client fetch the information, it will be faster