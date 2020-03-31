import { getCriminals } from "./criminals/CriminalDataProvider.js";
import CriminalListComponent from "./criminals/CriminalList.js";
import { getConvictions } from "./convictions/ConvictionDataProvider.js";
// import CrimeSelectorComponent from "./convictions/ConvictionSelector.js";
import ConvictionSelect from "./convictions/ConvictionSelector.js";
import NoteFormComponent from "./notes/NoteForm.js";
import { getNotes } from "./notes/NoteDataProvider.js";
import { NoteListComponent } from "./notes/NoteList.js";
import { getWitnesses } from "./witnesses/WitnessDataProvider.js";
import witnessShow from "./witnesses/WitnessShowList.js";
import { getOfficers } from "./officers/OfficerProvider.js"
import OfficerSelect from "./officers/OfficerSelector.js"
import { FilterListComponent } from "./filter/FilterList.js";
// import OfficerListComponent from "./officers/OfficerList.js";
// import noteComponent from "./notes/Note.js";
NoteFormComponent()
// renderWitnessButton()
// witnessShow()
getNotes().then(NoteListComponent)
getCriminals().then(CriminalListComponent);
getConvictions().then(ConvictionSelect)
getOfficers().then(() => {
    OfficerSelect()
})
// OfficerListComponent()

getWitnesses().then(witnessShow)
FilterListComponent()


// import { getCriminals } from './criminals/CriminalDataProvider.js'
// import ConvictionSelect from './convictions/convictionselect.js'
// import CriminalListComponent from './criminals/CriminalListComponent.js'
// import { getConvictions } from './convictions/convictionprovider.js'
// import NoteFormComponent from './notes/noteForm.js'
// import NoteListComponent from './notes/noteList.js'

// import { getWitnesses } from './witnesses/witnessesProvider.js'

// import witnessformComponent from './witnesses/witnessesform.js'
// import WitnessListComponent from './witnesses/witnessList.js'
// import { getNotes } from './notes/noteDataProvider.js'

// getConvictions().then(ConvictionSelect)
// getCriminals().then(CriminalListComponent)
// getNotes().then(NoteListComponent)
// NoteFormComponent()

// getWitnesses().then(WitnessListComponent)
// witnessformComponent()

