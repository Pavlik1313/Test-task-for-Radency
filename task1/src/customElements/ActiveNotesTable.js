import createHeaderContent from "./ListHeaderContent";
import createActiveNotePreview from "./ActiveNotePreview";
import icons from "../images/icons.js";
import NotesManager from "../managers/NotesManager";
import {renderCreateNoteForm} from "./NoteForm";

function renderActiveNotesTable(){
const   label = document.createElement('h1');
        label.textContent = 'Active notes';

const   notesTable = document.createElement('div');
        notesTable.className = 'note-table';
        notesTable.id = 'notes-table';

const   listHeader = document.createElement('div');
        listHeader.className = 'notes-list-header';

const   headerContent = createHeaderContent();

const   images = document.createElement('div');
        images.className = 'note-header-images';

const   editNote = document.createElement('img');
        editNote.className = 'note-header-img';
        editNote.src = icons.edit;

const   archiveNote = document.createElement('img');
        archiveNote.className = 'note-header-img';
        archiveNote.src = icons.archive;


const   deleteNote = document.createElement('img');
        deleteNote.className = 'note-header-img';
        deleteNote.src = icons.delete;


listHeader.append(headerContent, editNote, archiveNote, deleteNote);
notesTable.append(label, listHeader);
document.body.append(notesTable);
renderActiveNotesList();
}

let page = 0;
const nodesPerPage = 10;

function renderActiveNotesList() {

    let nodesList = document.getElementById('notes-list')
    if (nodesList) nodesList.remove();

    nodesList = document.createElement('div')
    nodesList.className='notes-list'
    nodesList.id='notes-list'

    const activeNotes = NotesManager.getActiveNotes(page*nodesPerPage, nodesPerPage);

    if (activeNotes.length > 0) {
        activeNotes.map((note) => nodesList.append(createActiveNotePreview(note)));
    }else {
        const   infoLabel = document.createElement('h3');
                infoLabel.textContent = 'There are no any notes yet...'

        nodesList.append(infoLabel)
    }
    const   footer = document.createElement('div');
            footer.className = 'notes-list-footer';

    const   createButton = document.createElement('button')
            createButton.className = 'create-button'
            createButton.innerHTML = "Create new one"
            createButton.onclick = ()=>renderCreateNoteForm();

    const   nextPageButton = document.createElement('button')
            nextPageButton.className = 'pagination-button'
            nextPageButton.innerHTML = ">>"
            nextPageButton.disabled = (page+1)*nodesPerPage >= NotesManager.countActiveNotes()
            nextPageButton.onclick = ()=>{
                page++;
                renderActiveNotesList();
            }

    const   previousPageButton = document.createElement('button')
            previousPageButton.className = 'pagination-button'
            previousPageButton.innerHTML = "<<"
            previousPageButton.disabled = page < 1;
            previousPageButton.onclick = ()=>{
                page--;
                renderActiveNotesList();
            }

    const   currentPageLabel = document.createElement('h4');
            currentPageLabel.textContent = 'current page:';

    const   currentPage = document.createElement('h4');
            currentPage.textContent = `${page}`;

    footer.append(currentPageLabel, previousPageButton, currentPage, nextPageButton, createButton);
    nodesList.append(footer)
    document.getElementById('notes-table').append(nodesList);
}
export  {renderActiveNotesTable, renderActiveNotesList};