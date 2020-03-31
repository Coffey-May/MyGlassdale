import { useCriminals } from "./CriminalDataProvider.js";
import CriminalComponent from "./Criminal.js";

const eventHub = document.querySelector(".container")
const contentElement = document.querySelector(".criminalsContainer");


console.log("***This is the criminal list component***")


const CriminalListComponent = () => {

    const criminalCollection = useCriminals();

    eventHub.addEventListener("filterClicked", event => {
        console.log("filter event heard")
        const crime = event.detail.conviction
        const officer = event.detail.arrestingOfficer

        const matchingCriminals = criminalCollection.filter(
            (currentCriminal) => {

                if (currentCriminal.conviction === crime && currentCriminal.arrestingOfficer === officer) {
                    return currentCriminal
                }
            }
        )

        if (matchingCriminals.length > 0) {
            render(matchingCriminals)
        } else { alert("No Criminals Match Search Criteria") }


    }

    )
    eventHub.addEventListener("click", event => {
        if (event.target.id === "witness--close") {
            render(criminalCollection)
        }
    })


    let render = criminalCollection => {
        contentElement.innerHTML = `
${criminalCollection
                .map(currentCriminal => {
                    return CriminalComponent(currentCriminal);
                })
                .join("")}`;
    }
    render(criminalCollection)
}
export default CriminalListComponent
// import { useCriminals } from "./CriminalDataProvider.js"
// import SingleCriminalComponent from "./CriminalComponent.js"


// const eventHub = document.querySelector(".container")

// let crimes = document.querySelector(".criminalsContainer")
// let criminalhtml = " "




// const CriminalListComponent = () => {
//     const importedCriminalArray = useCriminals()
//     for (const singleCriminal of importedCriminalArray) {
//         const html = SingleCriminalComponent(singleCriminal)
//         criminalhtml += html
//     }



//     eventHub.addEventListener("click", event => {
//         if (event.target.id.startsWith("button--")){
//             const dialogSiblingSelector = `#${event.target.id}+dialog`
//       const theDialog = document.querySelector(dialogSiblingSelector)
//       theDialog.showModal()

//         } else if (event.target.classList.contains("button--close")){
//             const dialogElement = event.target.parentNode
//             dialogElement.close()
//         }
//     })




//     crimes.innerHTML += `${criminalhtml}`

//     eventHub.addEventListener("crimeSelected", event => {
//         const crime = event.detail.crime
//         let filteredCriminals = importedCriminalArray.filter((criminal) => criminal.conviction === crime)
//         let filteredHTML = ""
//         crimes.innerHTML = ""
//         for (const singleCriminal of filteredCriminals) {
//             const html = SingleCriminalComponent(singleCriminal)
//             filteredHTML += html
//         }


//         crimes.innerHTML += `${filteredHTML}`

//     })



// }


// export default CriminalListComponent
