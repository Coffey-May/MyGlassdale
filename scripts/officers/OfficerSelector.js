import { useOfficers } from "./OfficerProvider.js";

const eventHub = document.querySelector(".container");
const officerListContainer = document.querySelector(".filters__officer");

const OfficerSelect = () => {
    const officers = useOfficers();

    eventHub.addEventListener("change", changeEvent => {
        if (changeEvent.target.id === "officerSelect") {
            const selectedOfficer = changeEvent.target.value;
            console.log(selectedOfficer);

            const message = new CustomEvent("officerSelected", {
                detail: {
                    officer: selectedOfficer
                }
            });

            eventHub.dispatchEvent(message);
        }
    });
    const render = officersCollection => {
        officerListContainer.innerHTML += `
  <select class="officerDropdown" id="officerSelect">
  <option value="0">Please select an officer...</option>
${officersCollection.map(
            officer => `<option id="officerSelect">${officer}</option>`
        )}
</select>
`;
    };
    render(officers);
};
export default OfficerSelect;