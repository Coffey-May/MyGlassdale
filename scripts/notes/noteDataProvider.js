
//THIS VARIABLE CALLED SAVED NOTE IS A FUNCTION THAT RETURN THE SAVED 
//NOTE TO THE API TO KEEP IT UP TO DATE WITH CURRENT CONTENT IN OUR APP STATE
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


//THIS VARIABLE NAMED NOTES EQUALS AN EMPTY ARRAY WITH THE POTENTIAL TO HAVE AN ARRAY INSERTED INTO IT
let notes = []

export const useNotes = () => {
    return notes
}


//THIS IS THE API FETCH THAT GETS THE DATA REMOTELY AND CONVERTS THE JSON TO A READABLE STRING AND NAMES 
//IT GET NOTE
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


export const deleteNote = noteId => {
    return fetch(`http://localhost:8000/notes/${noteId}`, {
        method: "DELETE"
    })
        .then(getNotes)
}

export const editNote = (note) => {
    return fetch(`http://localhost:8000/notes/${note.id}`, {
        method: "PUT",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(note)
    })
        .then(getNotes)
}