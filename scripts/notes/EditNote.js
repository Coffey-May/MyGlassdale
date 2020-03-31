const eventHub = document.querySelector(".container")

const EditNoteComponent = note => {
    console.log("building the edit note component")
    return `
  <input type="hidden" id="editNoteId" value="${note.id}">
  <input type="hidden" id="editNoteDate" value="${note.date}">
  <label for="suspectEntry">Suspect:</label>
  <input type="text" id="editNoteSuspect" value="${note.suspect}" readonly>
  <fieldset class="form__noteEntry">
    <label for="noteEntry">Edit Note:</label>
    <br>
    <textarea name="editNoteEntry" id="editNoteEntry" cols="70" rows="5">${note.text}</textarea>
  </fieldset>
  <button id="saveEditedNote--${note.id}">Save</button>
  `
}
eventHub.addEventListener("click", clickEvent => {
    if (clickEvent.target.id.startsWith("saveEditedNote--")) {
        const editedNoteText = document.querySelector("#editNoteEntry").value
        const editedNoteId = document.querySelector("#editNoteId").value
        const editedNoteDate = document.querySelector("#editNoteDate").value
        const editedNoteSuspect = document.querySelector("#editNoteSuspect").value

        console.log("edited note save button clicked")

        const editedNote = new CustomEvent("noteEdited",
            {
                detail: {
                    date: editedNoteDate,
                    suspect: editedNoteSuspect,
                    text: editedNoteText,
                    id: editedNoteId
                }
            })

        eventHub.dispatchEvent(editedNote)
    }
})
export default EditNoteComponent