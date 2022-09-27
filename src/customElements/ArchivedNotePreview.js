import "../styles/notePreview.css"
import createNotePreviewContent from "./NotePreviewContent";
import {renderArchiveList} from "./NotesArchive";
import {renderActiveNotesList} from "./ActiveNotesTable";
import NotesManager from "../managers/NotesManager";
import icons from "../images/icons";

function createArchivedNotePreview (note){
    let {id} = note

    const   noteContent = createNotePreviewContent(note);

    const   notePreviewBox = document.createElement('div');
            notePreviewBox.className = 'note-preview-box';
            notePreviewBox.id = id;

    const   buttons = document.createElement('div');
            buttons.className = 'note-preview-buttons';

    const   unarchiveNote = document.createElement('img');
            unarchiveNote.className = 'note-preview-button';
            unarchiveNote.src = icons.unarchive;
            unarchiveNote.onclick = ()=>{
               NotesManager.unarchiveNote(id);
               renderArchiveList();
               renderActiveNotesList();
            }

    const   deleteNote = document.createElement('img');
            deleteNote.className = 'note-preview-button';
            deleteNote.src = icons.delete;
            deleteNote.onclick = ()=>{
                NotesManager.deleteArchivedNote(id);
                renderArchiveList();
            }

    buttons.append(
        unarchiveNote,
        deleteNote);

    notePreviewBox.append(
        noteContent,
        buttons
    );
    return notePreviewBox;
}
export default createArchivedNotePreview;