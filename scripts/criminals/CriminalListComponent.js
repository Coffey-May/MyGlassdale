import { useCriminals } from "./CriminalDataProvider.js"
import SingleCriminalComponent from "./CriminalComponent.js"


const eventHub = document.querySelector(".container")

let crimes = document.querySelector(".criminalsContainer")
let criminalhtml = " "



const CriminalListComponent = () => {
    const importedCriminalArray = useCriminals()
    for (const singleCriminal of importedCriminalArray) {
        const html = SingleCriminalComponent(singleCriminal)
        criminalhtml += html
    }

    // crimes.innerHTML += `
    //     ${
    //     criminalhtml.map(
    //         (crime) => {
    //             return SingleCrimainalComponent()
    //         }
    //     ).join(" # ")
    //     }
    // `
    crimes.innerHTML += `${criminalhtml}`

    eventHub.addEventListener("crimeSelected", event => {
        const crime = event.detail.crime
        let filteredCriminals = importedCriminalArray.filter((criminal) => criminal.conviction === crime)
        let filteredHTML = ""
        crimes.innerHTML = ""
        for (const singleCriminal of filteredCriminals) {
            const html = SingleCriminalComponent(singleCriminal)
            filteredHTML += html
        }


        crimes.innerHTML += `${filteredHTML}`

    })


    
}



export default CriminalListComponent
