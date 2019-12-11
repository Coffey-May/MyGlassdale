export const saveNote = note => {
    console.log("*** SAVING NOTE]  ***")
    return fetch('http://localhost:8000/notes', {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(note)
    })
     .then(getNotes)
}


let notes = []

export const useNotes = () => {
    return notes
}
export const getNotes = () => {
    console.log("*** GETTING NOTES  ***")
    return fetch("http://localhost:8000/notes")
        .then(response => response.json())
        .then(
            parsedNotes => {
                notes = parsedNotes.slice()
            }
        )
}


