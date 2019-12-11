import { useNotes } from "./noteDataProvider.js"
import SingleNoteComponent from "./note.js"

const eventHub = document.querySelector(".container")

let notes = document.querySelector(".noteFormContainer")
let notehtml = " "



const NoteListComponent = () => {

    eventHub.addEventListener("showNotes", event => {
        const allTheNotes = useNotes()
        render(allTheNotes)
    })


    const render = (notesArray) => {


        for (const singleNote of notesArray) {
            const html = SingleNoteComponent(singleNote)
            notehtml += html
        }


        notes.innerHTML += `${notehtml}`

    }

}
export default NoteListComponent