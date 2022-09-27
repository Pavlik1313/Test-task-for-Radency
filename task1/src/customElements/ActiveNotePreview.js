import "../styles/notePreview.css"
import createNotePreviewContent from "./NotePreviewContent";
import {renderEditNoteForm} from "./NoteForm";
import NotesManager from "../managers/NotesManager";
import {renderActiveNotesList} from "./ActiveNotesTable";
import icons from "../images/icons";

function createActiveNotePreview (note){
    const  {id} = note

    const   noteContent = createNotePreviewContent(note);

    const   notePreviewBox = document.createElement('div');
            notePreviewBox.className = 'note-preview-box';
            notePreviewBox.id = id;

    const   buttons = document.createElement('div');
            buttons.className = 'note-preview-buttons';

    const   editNote = document.createElement('img');
            editNote.className = 'note-preview-button';
            editNote.src = icons.edit;
            editNote.onclick = () => renderEditNoteForm(note);

    const   archiveNote = document.createElement('img');
            archiveNote.className = 'note-preview-button';
            archiveNote.src = icons.archive;
            archiveNote.onclick =()=>{
                NotesManager.archiveNote(id);
                renderActiveNotesList();
            }

    const   deleteNote = document.createElement('img');
            deleteNote.className = 'note-preview-button';
            deleteNote.src = icons.delete;
            deleteNote.onclick = ()=> {
                NotesManager.deleteNote(id);
                renderActiveNotesList();
            }

    buttons.append(
            editNote,
            archiveNote,
            deleteNote);

    notePreviewBox.append(
            noteContent,
            buttons
    );
    return notePreviewBox;
}
export default createActiveNotePreview;