import createHeaderContent from "./ListHeaderContent";
import icons from "../images/icons.js";
import NotesManager from "../managers/NotesManager";
import createArchivedNotePreview from "./ArchivedNotePreview";
import renderStatisticBox from "./Statistic";

function renderNotesArchive(){
    const   background = document.createElement('div');
            background.className = 'form-background';
            background.id = 'notes-archive';
    background.addEventListener('click', (event) =>{
        const isClickOnContent = notesArchive.contains(event.target)||event.target.className === 'note-preview-button'
        if (!isClickOnContent) document.querySelector('.form-background').remove()
    })

    const   label = document.createElement('h1');
            label.textContent = 'Archive';

    const   notesArchive = document.createElement('div');
            notesArchive.className = 'note-table';
            notesArchive.id = 'notes-archive-box'

    const   listHeader = document.createElement('div');
            listHeader.className = 'notes-list-header';

    const   headerContent = createHeaderContent();

    const   images = document.createElement('div');
            images.className = 'note-header-images';

    const   unarchiveNote = document.createElement('img');
            unarchiveNote.className = 'note-header-img';
            unarchiveNote.src = icons.unarchive


    const   deleteNote = document.createElement('img');
            deleteNote.className = 'note-header-img';
            deleteNote.src = icons.delete;

    const   footer = document.createElement('div');
    footer.className = 'notes-list-footer archive-footer';
    footer.id = 'archive-footer'
    const   clearButton = document.createElement('button')
    clearButton.className = 'clear-archive-button'
    clearButton.textContent = 'Clear archive'
    clearButton.onclick= ()=>{
        if(window.confirm('Do you want to clear the archive? All archived notes will be lost.')){
            NotesManager.cleanArchive();
            renderArchiveList();
            renderStatisticBox();
        }
    }
    const   okButton = document.createElement('button')
    okButton.className = 'close-archive-button'
    okButton.textContent = 'Ok'
    okButton.onclick= ()=>{
        document.getElementById('notes-archive').remove();
    }

    footer.append(clearButton, okButton);


    listHeader.append(headerContent, unarchiveNote, deleteNote);
    notesArchive.appendChild(label);
    notesArchive.appendChild(listHeader)
    notesArchive.appendChild(footer)

    background.append(notesArchive)
    document.body.append(background);
    renderArchiveList();
}

function renderArchiveList() {
    let archiveList = document.getElementById('archive-list')
    if (archiveList) archiveList.remove();
    archiveList = document.createElement('div')
    archiveList.className='notes-list'
    archiveList.id='archive-list'

    const notes = NotesManager.getArchive()
    console.log(notes)

    if (notes.length > 0) {
        notes.map((note) => archiveList.append(createArchivedNotePreview(note)));
    }else {
        const   infoLabel = document.createElement('h3');
        infoLabel.textContent = 'Archive is empty'

        archiveList.append(infoLabel)
    }

    document.getElementById('notes-archive-box').insertBefore(archiveList, document.getElementById('archive-footer'));

}
export  {renderNotesArchive, renderArchiveList};