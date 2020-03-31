// import { getWitnesses, useWitnesses } from "./witnessesProvider.js"


// // THESE CONSTS TARGET THE HTML AREAS AND GIVE THEM A NEW NAME
// const contentTarget = document.querySelector(".witnesses")
// const eventHub = document.querySelector(".container")


// // THIS BLOCK  LISTENS FOR THE CLICK OF THE BUTTON FROM THE WITNESS FORM INNER HTML,
// // AND CALLS IT THE WITNESS LIST COMPONENT.
// // IF THE CLICK EVENT IS TRUE OR FALSE IT TOGGLES THE DISPLAY OF THE WITNESS LIST
// const witnessListComponent = () => {
//     eventHub.addEventListener("showWitnessesButtonClicked", event => {
//         if (contentTarget.innerHTML === ""){
//             const allTheWitnesses = useWitnesses()
//             render(allTheWitnesses)

//         }  else{
//             contentTarget.innerHTML = ""
//         }
//     })


// //DECLARES A FUNCTION THAT ACTS AS A TEMPLATE FOR THE ITRABLE DATA FROM THE WITNESS PROVIDER 
//     const render = (witnessesCollection) => {
//         contentTarget.innerHTML = witnessesCollection.map(
//             (individualWitness) => {
//                 return `
//                     <section class="witness">
//                         <div>${individualWitness.id}</div>
//                         <div>${individualWitness.name}</div>
//                         <div>${individualWitness.statements}</div>
//                     </section>
//                 `
//             }
//         ).join("")
//     }

// }

// export default witnessListComponent