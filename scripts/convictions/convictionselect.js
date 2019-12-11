/*
 *   ConvictionSelect component that renders a select HTML element
 *   which lists all convictions in the Glassdale PD API
 */
import { useConvictions } from "./convictionprovider.js"
const eventHub = document.querySelector(".container")
// Get a reference to the DOM element where the <select> will be rendered
const contentTarget = document.querySelector(".filters__crime")
const ConvictionSelect = () => {
    // Get all convictions from application state
    const convictions = useConvictions()

    eventHub.addEventListener("change", changeEvent => {
        if (changeEvent.target.id === "crimeSelect") {
            const selectedCrime = changeEvent.target.value.split("-").join(" ")
            console.log("shit changed")

            const currentCrime = new CustomEvent("crimeSelected", {
                detail: {
                    crime: selectedCrime
                }
            })

            eventHub.dispatchEvent(currentCrime)
        }
    })


    const render = convictionsCollection => {
        /*
            Use interpolation here to invoke the map() method on
            the convictionsCollection to generate the option elements.
            Look back at the example provided above.
        */
        contentTarget.innerHTML = `
            <select class="dropdown" id="crimeSelect">
                <option value="0">Please select a crime...</option>
             ${convictions.map(crime =>
            `<option value=${crime.split(" ").join("-")}>${crime}</option>`
        )}
            </select>
        `
    }

    render(convictions)
}

export default ConvictionSelect