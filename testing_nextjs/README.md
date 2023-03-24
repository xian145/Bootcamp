To create a project using next.js we use the next command

npx create-next-app@latest my-app

typeScript No
ESlint Yes
src/ direwctory No
exprimental app. directory No
ENTER

When run with "npm run dev" will appear .next folder

When we creat a new js file with a "name" it will automatically create that page in our project, just need to type "localhost:3000/'name'"

If we want to create a dynamic URL we need to create a file with the dame [id].js to handle this URLs inside of the archive

In the file name, [id] inside the square brackets means that anything that's dynamic will be put inside the id parameter of the query property of the router.

so we need to import the router inside the [id].js file