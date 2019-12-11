import { getCriminals } from './criminals/CriminalDataProvider.js'
import ConvictionSelect from './convictions/convictionselect.js'
import CriminalListComponent from './criminals/CriminalListComponent.js'
import { getConvictions } from './convictions/convictionprovider.js'
import NoteFormComponent from './notes/noteForm.js'
import NoteListComponent from './notes/noteList.js'
getConvictions().then(ConvictionSelect)
getCriminals().then(CriminalListComponent)

NoteFormComponent()
NoteListComponent()