const SingleNoteComponent = (note) => {
    return `
  <div class ="note--Inner" >
       <div>DATE:${note.date}</div>
       <div>SUSPECT:${note.suspect}</div>
       <div>NOTE:${note.note}</div>
       

  </div>
   
    `
}

export default SingleNoteComponent