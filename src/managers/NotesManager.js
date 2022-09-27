import {findDates} from "./DatesManager";
import testNotesSet from "../testNodesSet";

let activeNotes = [];
let archiveNotes = [];

const NotesManager = {
    addTeatNodesSet: ()=> activeNotes.push(...testNotesSet),

    countActiveNotes: ()=> activeNotes.length,

    getActiveNotes: (start, count) => activeNotes.slice(start, start+count),

    getArchive: ()=>[...archiveNotes],

    createNote: (note)=>{
        const id = Date.now();
        const createdDate = new Date().toDateString().slice(4)+'<br/>'+new Date().toTimeString().slice(0,5);
        const dates = findDates(note.text);
        activeNotes.unshift({...note, id, createdDate, dates})
        console.log(activeNotes);
        console.log(archiveNotes);
    },

    updateNode: (newNote)=>{
        const noteIndex = activeNotes.findIndex((note) => note.id === newNote.id)
        if (noteIndex > -1){
            activeNotes[noteIndex] = newNote;
        }
    },

    deleteNote: (id) => {
        const noteIndex = activeNotes.findIndex((note) => note.id === id)
        if (noteIndex > -1){
            activeNotes.splice(noteIndex, 1);
        }
    },

    deleteArchivedNote: (id) => {
        const noteIndex = archiveNotes.findIndex((note) => note.id === id)
        if (noteIndex > -1){
            archiveNotes.splice(noteIndex, 1);
        }
    },

    archiveNote: (id) => {
        const noteIndex = activeNotes.findIndex((note) => note.id === id)
        if (noteIndex > -1){
            archiveNotes.push(activeNotes[noteIndex]);
            activeNotes.splice(noteIndex, 1);
        }
    },

    unarchiveNote: (id) => {
        const noteIndex = archiveNotes.findIndex((note) => note.id === id)
        if (noteIndex > -1){
            activeNotes.push(archiveNotes[noteIndex]);
            activeNotes = activeNotes.sort((a, b) => b.id - a.id);
            archiveNotes.splice(noteIndex, 1);
        }
    },

    cleanArchive: ()=>{
        archiveNotes.splice(0);
    },

    getStatistic: ()=>{
        return {
            active: activeNotes.reduce((statistic, {category}) => {
                if (statistic.hasOwnProperty(category)) statistic[category]++;
                else statistic[category] = 1;
                return statistic
            }, {}),
            archived: archiveNotes.reduce((statistic, {category}) => {
                if (statistic.hasOwnProperty(category)) statistic[category]++;
                else statistic[category] = 1;
                return statistic
            }, {}),
        }

    }
}
export default NotesManager;