import "./styles/app.css"
import {renderActiveNotesTable} from "./customElements/ActiveNotesTable";
import {renderNotesArchive} from "./customElements/NotesArchive";
import renderStatisticBox from "./customElements/Statistic";

function render(){
    renderActiveNotesTable();

    const   openArchiveButton = document.createElement('button');
    openArchiveButton.textContent = 'Open archive';
    openArchiveButton.className = 'open-archive-button';
    openArchiveButton.onclick= ()=> renderNotesArchive();
    document.body.append(openArchiveButton);

    renderStatisticBox();
}

render();



