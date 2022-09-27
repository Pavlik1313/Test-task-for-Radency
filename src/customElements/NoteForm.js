import '../styles/noteForm.css'
import NotesManager from "../managers/NotesManager";
import {renderActiveNotesList} from "./ActiveNotesTable";
import {findDates} from "../managers/DatesManager";
import renderStatisticBox from "./Statistic";

let categories = ["Idea", "Quote", "Task", "Random thought"]

function renderCreateNoteForm () {

    const   formBackground = document.createElement('div');
            formBackground.className = 'form-background';
            formBackground.id = 'note-form';

    const   formBox = document.createElement('div');
            formBox.className = 'form-box';


    const   noteNameInput = document.createElement('input');
            noteNameInput.className = 'note-name-input';
            noteNameInput.id = 'note-name-input';
            noteNameInput.placeholder = 'Name';

    const   noteCategorySelector = document.createElement('select')
            noteCategorySelector.className = "note-category-selector";
            noteCategorySelector.id = "note-category-selector";
            categories.map((type)=>{
                const option = document.createElement('option');
                option.value = type;
                option.innerHTML = type;
                noteCategorySelector.appendChild(option);
            });
            
    const   noteText = document.createElement('textarea');
            noteText.className = 'note-text';
            noteText.id = 'note-text';
    
    const   cancelButton = document.createElement('button');
            cancelButton.className = 'cancel-button';
            cancelButton.textContent = 'cancel'
            cancelButton.onclick = () => document.querySelector('#note-form').remove();
            
    const   confirmButton = document.createElement('button');
            confirmButton.className = 'confirm-button'
            confirmButton.id = 'confirm-button'
            confirmButton.textContent = 'Create'
            confirmButton.onclick = () => {
                const name = noteNameInput.value;
                if (name !== '') {
                    const category = noteCategorySelector.value;
                    const text = noteText.value.replace(/&#13;&#10;/g, '\n');
                    NotesManager.createNote({name, category, text})
                    renderActiveNotesList();
                    renderStatisticBox();
                    document.querySelector('#note-form').remove();
                }else {
                    alert('A name is required')
                }
            };

    formBox.append(noteNameInput,noteCategorySelector,noteText,cancelButton,confirmButton);
    formBackground.append(formBox);
    document.body.append(formBackground)
}
function renderEditNoteForm(note){
    const {id, name, category, text} = note;
    renderCreateNoteForm();

    document.querySelector('#note-name-input').value = name;
    document.querySelector('#note-category-selector').value = category;
    document.querySelector('#note-text').value = text;
    document.querySelector('#confirm-button').textContent = 'Edit';
    document.querySelector('#confirm-button').onclick = () => {
        note.name = document.querySelector('#note-name-input').value;
        note.category = document.querySelector('#note-category-selector').value;
        note.text = document.querySelector('#note-text').value;
        note.dates = findDates(note.text)
        NotesManager.updateNode({...note, id})
        renderActiveNotesList();
        document.querySelector('#note-form').remove();
    };
}
export {renderCreateNoteForm, renderEditNoteForm};