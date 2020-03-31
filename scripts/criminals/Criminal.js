const eventHub = document.querySelector(".container");

const CriminalComponent = criminal => {
  console.log("***This is the criminal rendering component***");
  return `
  <section class="criminal">
  <div class="criminal__name">${criminal.name}</div>
  <div class="criminal__info">
  <img class="criminal image" src="./images/mugshot.jpg" height=40px width=30px>
  <div>Age: ${criminal.age}</div>
  <div>Conviction: ${criminal.conviction}</div>
  <div>Term Start: ${new Date(criminal.incarceration.start).toLocaleDateString(
    "en-US"
  )}</div>
  <div>Term End: ${new Date(criminal.incarceration.end).toLocaleDateString(
    "en-US"
  )}</div>
  </div>
  <button type="button" class="interviewButton" id="interviewButton--${
    criminal.id
    }">Interview Associates</button>
  
  <dialog class="dialog--associate" id="details--${criminal.id}">
              ${criminal.known_associates
      .map(
        associate => `
              <div>Name: ${associate.name}</div>
              <div>Alibi: ${associate.alibi}</div>
              <hr>`
      )

      .join("")
    }
                
              <button class="button--close">Close</button>
          </dialog>
  </section>
  <br>
  `;
};

eventHub.addEventListener("click", event => {
  if (event.target.id.startsWith("interviewButton--")) {
    const dialogSiblingSelector = `#${event.target.id}+dialog`;
    const theDialog = document.querySelector(dialogSiblingSelector);
    theDialog.showModal();
  } else if (event.target.classList.contains("button--close")) {
    const dialogElement = event.target.parentNode;
    dialogElement.close();
  }
});

export default CriminalComponent;
// //CONVERTS A RAW DATA CRIMINAL TO AN HTML REPRESENTATION OF THAT CRIMINAL
// const SingleCriminalComponent = (criminal) => {
//     return `
//   <div class ="criminal--Inner" >
//        <div> NAME:${criminal.name}</div>
//        <div> AGE:${criminal.age}</div>
//        <div> CONVICTION:${criminal.conviction}</div>
//        <div> INCARCERATION START:${new Date(criminal.incarceration.start).toLocaleDateString('en-US')}</div>
//        <div> INCARCERATION END:${new Date(criminal.incarceration.end).toLocaleDateString('en-US')}</div>




//   <button id="button--${criminal.id}">ASSOCIATE ALIBIS:</button>
//   <dialog class="dialog" id="details--">
//       ${criminal.known_associates.map(
//         assoc =>`
//         <div>ASSOCIATE NAME:${assoc.name}</div>
//         <div>ALIBI:${assoc.alibi}</div>
//         `
//         ).join("")}
//         <button class="button--close">Close Dialog</button>
//   </dialog>
//   </div>


// `
// }

// export default SingleCriminalComponent




