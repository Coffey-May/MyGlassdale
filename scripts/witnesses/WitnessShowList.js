import { useWitnesses, getWitnesses } from "./WitnessDataProvider.js";
import WitnessComponent from "./Witness.js"
const eventHub = document.querySelector(".container");
// const contentElement = document.querySelector(".show__witnesses");
const contentElement = document.querySelector(".criminalsContainer");

// export const renderWitnessButton = () => {
//   contentElement.innerHTML += `
// <button class="showWitnesses" id="showWitnesses">Show Witnesses
// </button>`;
// };

const witnessShow = () => {
    const witnesses = useWitnesses()

    eventHub.addEventListener("click", changeEvent => {
        if (changeEvent.target.id === "showWitnesses") {

            getWitnesses().then(
                () => {

                    render(witnesses)
                }
            )

        }

    }
    )
}

const render = (witnesses) => {
    contentElement.innerHTML = `
      ${witnesses.map(witness => {
        return WitnessComponent(witness)
    }).join("")}
      `
}




export default witnessShow;