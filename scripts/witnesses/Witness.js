

const WitnessComponent = witness => {
    console.log("***This is the witness rendering component***");
    return `
    <section class="witness">
    <div class="witness__info">
    <div>Witness: ${witness.name}</div>
    <div>Statement: ${witness.statements}</div>
    </div>
    </section>`

}
export default WitnessComponent