const eventHub = document.querySelector(".container")
let conviction = null
let arrestingOfficer = null


export const FilterComponent = () => {
    return `
<button id="filterCriminals">Filter</button>
<button class="witness--close" id="witness--close">Show All Criminals</button>
<button class="showWitnesses" id="showWitnesses">Show Witnesses</button>
      
`
}

eventHub.addEventListener("crimeSelected", event => {
    conviction = event.detail.crime
})

eventHub.addEventListener("officerSelected", event => {
    arrestingOfficer = event.detail.officer
})

eventHub.addEventListener("click", clickEvent => {
    if (clickEvent.target.id === "filterCriminals") {
        console.log("filter event sent")
        const filterClicked = new CustomEvent("filterClicked", {
            detail: {
                conviction: conviction,
                arrestingOfficer: arrestingOfficer
            }
        })
        eventHub.dispatchEvent(filterClicked)
    }
})