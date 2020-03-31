const noteComponent = note => {
  console.log("building the note component")
  return `
  <div class="note">
  <div>Date: ${note.date}</div>
  <div>Suspect: ${note.suspect}</div>
  <div>Note: ${note.text}</div>
  <button id="deleteNote--${note.id}">Delete</button>
  <button id="editNote--${note.id}">Edit</button>
  <hr>
  </div>
  <br>
  <dialog class="dialog__editForm"></dialog>
  `
}

export default noteComponent
//THIS IS A VARIABLE NAMED SINGLENOTE COMPONENT THAT IS A FUNCTION
//THAT BUILDS A TEMPLATE TO BE INSERTED DYNAMICALLY INTO THE HTML
//IT IS THEN EXPORTED INTO THE NOTE LIST TO BE USED IN THE NOTE NOTE LIST COMPONENT

// const SingleNoteComponent = (note) => {
//     return `
//   <div class ="note--Inner" >

//        <div>DATE:${note.date}</div>
//        <div>SUSPECT:${note.suspect}</div>
//        <div>NOTE:${note.note}</div>
//        <button id="deleteNote--${note.id}">Delete</button>
//        </div>  
//     `
// }

// export default SingleNoteComponent