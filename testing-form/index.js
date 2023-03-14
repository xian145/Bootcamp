document.addEventListener('DOMContentLoaded', ()=>{
    const form = document.querySelector('form') //search for "form" in the document

    form.addEventListener('submit', event => { //look for the submit event and do something
        event.preventDefault() //prevent to reload the page after submit
        alert('form submit event!') //instead of reload the page just send a message 
    })
}) //wrap everything in the DOMContentLoaded so this will execute after the DOM is loaded
