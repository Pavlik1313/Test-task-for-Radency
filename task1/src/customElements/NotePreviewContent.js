import createNoteView from "./noteView";
import icons from "../images/icons";


function getTextPreview(content){
    if (content.length < 30) return content;
    else return content.slice(0,27)+"..."
}
function createNotePreviewContent(note) {
    let {name, createdDate, category, text, dates} = note

    const textPreview = getTextPreview(text);

    const   noteContent = document.createElement('div');
            noteContent.className = 'note-preview-content';
            noteContent.onclick = ()=> createNoteView(note);

    const   icon = document.createElement('img');
            icon.className = 'note-icon';
            icon.src = icons[category];

    const   noteName = document.createElement('h3');
            noteName.className = 'note-preview-name';
            noteName.textContent = name;

    const   noteCreatedDate = document.createElement('h3');
            noteCreatedDate.className = 'note-preview-created';
            noteCreatedDate.innerHTML = createdDate;

    const   noteCategory = document.createElement('h3');
            noteCategory.className = 'note-preview-category';
            noteCategory.textContent = category;

    const   noteTextPreview = document.createElement('h3');
            noteTextPreview.className = 'note-preview-text';
            noteTextPreview.textContent = textPreview;

    const   noteDates = document.createElement('h3');
            noteDates.className = 'note-preview-dates';
            noteDates.innerHTML = dates;

    noteContent.append(
        icon,
        noteName,
        noteCreatedDate,
        noteCategory,
        noteTextPreview,
        noteDates
    );
    return noteContent;

}
export default createNotePreviewContent;