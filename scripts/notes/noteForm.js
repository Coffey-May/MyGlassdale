
import {saveNote} from './noteDataProvider.js'



const contentTarget = document.querySelector(".noteFormContainer")
const eventHub = document.querySelector(".container")

eventHub.addEventListener("click", clickEvent => {
    if (clickEvent.target.id === "saveNote") {
       
        let noteText = document.querySelector("#note-text").value
        let suspect = document.querySelector("#suspect").value

        let newNote = {
            date: Date.now(),
            note: noteText,
            suspect: suspect
        }

        // Make a new object representation of a note
        const message = new CustomEvent("noteSaved")

        // Change API state and application state
        saveNote(newNote).then(() => eventHub.dispatchEvent(message))
        
    }
})


eventHub.addEventListener("click", clickEvent => {
    if (clickEvent.target.id === "showNote") { 
        const message = new CustomEvent("showNotes") 


        eventHub.dispatchEvent(message)
    }
})




const NoteFormComponent = () => {
    const render = () => {
        contentTarget.innerHTML = `
          
            <input type="text" id="note-text">
            <input type="text" id="suspect">
            <button id="saveNote">Save Note</button>
            <button id="showNote">Show Notes</button>
        `
    }

    render()
}

export default NoteFormComponent