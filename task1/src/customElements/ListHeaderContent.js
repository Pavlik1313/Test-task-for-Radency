import icons from "../images/icons";
import "../styles/notesList.css"

function createHeaderContent(){
    const   content = document.createElement('div');
            content.className = 'list-header-content';

    const   icon = document.createElement('img');
            icon.className = 'note-icon';
            icon.src = icons.default;

    const   noteName = document.createElement('h3');
            noteName.className = 'note-name-title';
            noteName.textContent = 'Name';

    const   noteCreatedDate = document.createElement('h3');
            noteCreatedDate.className = 'note-created-title';
            noteCreatedDate.textContent = 'Created';

    const   noteCategory = document.createElement('h3');
            noteCategory.className = 'note-category-title';
            noteCategory.textContent = 'Category';

    const   noteTextPreview = document.createElement('h3');
            noteTextPreview.className = 'note-text-title';
            noteTextPreview.textContent = 'Content';

    const   noteDates = document.createElement('h3');
            noteDates.className = 'note-dates-title';
            noteDates.textContent = 'Dates';



    content.append(
        icon,
        noteName,
        noteCreatedDate,
        noteCategory,
        noteTextPreview,
        noteDates
    );
    return content;
}
export default createHeaderContent;