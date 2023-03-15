document.addEventListener("DOMContentLoaded", ()=> {
    const form = document.querySelector("form") //select the form, this is only posible bc we have only one form, but if not we need to use id or classes
    form.addEventListener("submit", async (event) => { //add a event whe hear the submit IMPORTANT!!!!! dont forget to use async function so we can use await
        event.preventDefault()

        const username = document.querySelector("input").value //this constant will get its value from the input of the form
        const response = await fetch(`https://api.github.com/users/${username}`) //this will fetch infromation from the API serching for the username we introduce from the form
        const data = await response.json() //once we have the response we convert that information into json.
        console.log(data);
    })
})