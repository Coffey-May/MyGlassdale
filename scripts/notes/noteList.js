import noteComponent from "./Note.js";
import EditNoteComponent from "./EditNote.js";
import {
    useNotes,
    saveNote,
    getNotes,
    deleteNote,
    editNote
} from "./NoteDataProvider.js";

const eventHub = document.querySelector(".container");
const contentElement = document.querySelector(".notesContainer");

export const NoteListComponent = () => {
    let noteCollection = useNotes();

    eventHub.addEventListener("noteSaved", event => {
        saveNote(event.detail).then(() => {
            contentElement.innerHTML = "";
            document.querySelector("#noteDate").value = "";
            document.querySelector("#suspect").value = "";
            document.querySelector("#noteEntry").value = "";

            const allTheNotes = useNotes();
            render(allTheNotes);
        });
    });

    eventHub.addEventListener("showNoteButtonClicked", event => {
        if (contentElement.innerHTML === "") {
            document.querySelector("#showNotes").innerHTML = "Close Notes";

            getNotes().then(() => {
                const allTheNotes = useNotes();
                render(allTheNotes);
            });
        } else {
            document.querySelector("#showNotes").innerHTML = "Show Notes";
            contentElement.innerHTML = "";
        }
    });

    eventHub.addEventListener("click", clickEvent => {
        if (clickEvent.target.id.startsWith("deleteNote--")) {
            const [prefix, id] = clickEvent.target.id.split("--");
            deleteNote(id).then(() => render(useNotes()));
        }
    });

    eventHub.addEventListener("click", clickEvent => {
        if (clickEvent.target.id.startsWith("editNote--")) {
            const [prefix, noteId] = clickEvent.target.id.split("--");
            // find object by id then send to editNoteComponent
            const allNotes = useNotes();
            const theSelectedNote = allNotes.find(note => note.id === parseInt(noteId, 10));
            const contentTarget = document.querySelector(".dialog__editForm");

            renderEdit(contentTarget, theSelectedNote);
            const theDialog = document.querySelector(".dialog__editForm")
            theDialog.showModal();;
        }
    });

    eventHub.addEventListener("noteEdited", clickEvent => {
        console.log("edited note message heard")

        editNote(clickEvent.detail).then(() => render(useNotes()));

    });

    const render = noteCollection => {
        contentElement.innerHTML = `
  ${noteCollection
                .map(note => {
                    return noteComponent(note);
                })
                .join(" ")}
  `;
    };

    const renderEdit = (contentTarget, theSelectedNote) => {
        contentTarget.innerHTML = `
  ${EditNoteComponent(theSelectedNote)}
  `;
    };
};
//THIS FIRST IMPORT BRINGS IN THE API INFORMATION FROM THE NOTE PROVIDER
//THE SECOND IMPORT BRINGS IN THE ITERABLE NOTE TEMPLATE TO BE INSERTED 
//DYNAMICALLY INTO THE HTML
// import { useNotes } from "./noteDataProvider.js"
// import SingleNoteComponent from "./note.js"
// import  { deleteNote } from "./noteDataProvider.js"


// //THIS LINE OF CODE TARGETS THE EVENT HUB ON THE HTML 
// //NAMED CONTAINER AND NAMES IT EVENTHUB
// const eventHub = document.querySelector(".container")


// //THIS LINE OF CODE TARGETS THE HTML ELEMENT NOTEFORMCONTAINER AND 
// //CALLS IT NOTES
// //THE SECOND LINE OF CODE DECLARES THE VARIABLE NAMED NOTEHTML AS AN 
// //EMPTY STRING
// let notes = document.querySelector(".noteContainer")
// let notehtml = " "


// //THIS VARIABLE NAMED NOTELISTCOMPONENT RETURNS A FUNCTION
// //THE RETURNED FUNCTION LISTENS FOR THE SHOWNOTES CLASS FROM THE 
// //NOTE FORM COMPONENT ON NOTEFORM.JS, WHEN HEARD IT RETURNS THE ARRAY OF NOTES
// //DECLARED IN THE NOTEDATAPROVIDER
// //THE RENDER FUNCTION IS THEN INVOKED
// const NoteListComponent = () => {
//     eventHub.addEventListener("showNotes", event => {
//         if(document.querySelector('.noteContainer').innerHTML === ""){
//             const allTheNotes = useNotes()
//             render(allTheNotes)  
//         }else{
//             document.querySelector('.noteContainer').innerHTML = ""

//         }

//     })

//         eventHub.addEventListener("click", event => {
//            if (event.target.id.startsWith("deleteNote--")){
//                const[deletePrefix, idClicked] = event.target.id.split("--")
//                deleteNote(idClicked)
//                .then(()=>{
//                     const newNotes = useNotes()
//                     console.log(newNotes)
//                     render(newNotes)
//                    }
//                )
//            }
//         })

// // eventHub.addEventListener("showNotes", clickEvent => {

// //         const allNotes = useNotes()
// //                     render(allNotes)

// // })


// //A VARIABLE CALLED RENDER IS DECLARED AND RETURNS A FUNCTION THAT APPENDS
// // ITERABLE PORTIONS OF ALL OF OUR NOTES AND PUTS THEM INTO OUR SINGLE NOTE COMPONENT
// // FROM NOTE.JS
//     const render = (notesArray) => {

//         for (const singleNote of notesArray) {
//             let html = SingleNoteComponent(singleNote)
//             notehtml += html
//         }

//         notes.innerHTML = ""

//         notes.innerHTML = `${notehtml}`


//     }

// }


// //THIS EXPORT SEND THESE ABOVE ACTIONS TO MAIN.JS
// export default NoteListComponent