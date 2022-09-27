import '../styles/noteView.css'
import {highlightDates} from "../managers/DatesManager";


function createNoteView (note) {
    const {name, createdDate, category, text} = note;

    const   viewBackground = document.createElement('div');
            viewBackground.className = 'view-background';
            viewBackground.id = 'note-view';

    const   viewBox = document.createElement('div');
            viewBox.className = 'view-box';

    const   noteCreatedDate = document.createElement('h4');
            noteCreatedDate.className = 'note-created-date';
            noteCreatedDate.innerHTML = createdDate;

    const   noteName = document.createElement('h1');
            noteName.className = 'note-name';
            noteName.textContent = name;

    const   noteCategory = document.createElement('h3')
            noteCategory.className = "note-category";
            noteCategory.textContent = category

    const   noteText = document.createElement('p');
            noteText.className = 'note-view-text';
            noteText.innerHTML = highlightDates(text).replace(/\n/g,`<br/>`);


    const   confirmButton = document.createElement('button');
    confirmButton.className = 'ok-button'
    confirmButton.textContent = 'Ok'
    confirmButton.onclick = () => {
        document.getElementById('note-view').remove();
    };

    viewBox.append(noteCategory,noteName,noteCreatedDate,noteText,confirmButton);
    viewBackground.append(viewBox);
    document.body.append(viewBackground)
}
export default createNoteView;