document.addEventListener("DOMContentLoaded", ()=> {
    const form = document.querySelector("form") //select the form, this is only posible bc we have only one form, but if not we need to use id or classes
    form.addEventListener("submit", async (event) => { //add a event whe hear the submit IMPORTANT!!!!! dont forget to use async function so we can use await
        event.preventDefault()

        const username = document.querySelector("input").value //this constant will get its value from the input of the form
        const response = await fetch(`https://api.github.com/users/${username}`) //this will fetch infromation from the API serching for the username we introduce from the form

        const createCard = (data) => `
        <div class="px-4 py-5 sm:px-6 -ml-4 -mt-4 border-b border-gray-200 pb-8 flex justify-between items-center flex-wrap sm:flex-no-wrap">
            <div class="ml-4 mt-4">
                <div class="flex items-center">
                    <div class="flex-shrink-0">
                        <img class="h-12 w-12 rounded-full" src="${data.avatar_url}" alt="User avatar" />
                    </div>
                    <div class="ml-4">
                        <h3 class="text-lg leading-6 font-medium text-gray-900">
                            ${data.name}
                            <span class="text-sm leading-5 text-gray-500">
                                @${data.login}
                            </span>
                        </h3>
                        <p class="text-sm leading-5 text-gray-500">
                            ${
                            data.public_repos
                            } repositories. User since ${data.created_at.slice(0, 4)}
                        </p>
                        <p class="text-sm leading-5 text-gray-500">
                            ${data.location || ""}
                        </p>
                        <p class="mt-1 text-sm leading-5 text-gray-500">
                            ${data.bio}
                        </p>
                    </div>
                </div>
            </div>
        <div class="ml-4 mt-4 flex-shrink-0 flex">
        <span class="ml-3 inline-flex rounded-md shadow-sm">
            <a href="${
                data.html_url
            }"><button type="button" class="mr-2 relative inline-flex items-center px-4 py-2 border border-gray-300 text-sm leading-5 font-medium rounded-md text-gray-700 bg-white hover:text-gray-500 focus:outline-none focus:shadow-outline-blue focus:border-blue-300 active:bg-gray-50 active:text-gray-800">
            <span>
                Profile
            </span>
            </button>
            </a>
            <a href="${
                data.blog
            }"><button type="button" class="relative inline-flex items-center px-4 py-2 border border-gray-300 text-sm leading-5 font-medium rounded-md text-gray-700 bg-white hover:text-gray-500 focus:outline-none focus:shadow-outline-blue focus:border-blue-300 active:bg-gray-50 active:text-gray-800">
                <span>
                    Website
                </span>
                </button>
            </a>
        </span>
        </div>
        </div>
      ` //this function will create a string tha will be added to the HTML with all the tailwindcss style
        //all that information is fetch from the API and we just give them form

        if (response.status === 200) { //check if everything is ok, and if it is create tehe card, its important the funtion is above.
            const data = await response.json() //once we have the response we convert that information into json.
            const card = createCard(data) //call the function and introduce the "data"
            document.querySelector('#container').insertAdjacentHTML("afterbegin", card) //on id=conatiner will add as a string in HTML what is contained in "card"
            //the afterbegin property will make the last card show first.
        }else { //if not found do this
            alert('Username not found')
        }
    })
})