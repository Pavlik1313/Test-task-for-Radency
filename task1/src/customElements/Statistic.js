import NotesManager from "../managers/NotesManager";
import icons from "../images/icons";
import '../styles/statistic.css'

function renderStatisticBox() {
        let statisticBox = document.querySelector('.statistic-box')
        if (statisticBox) statisticBox.remove();
        const statistic = NotesManager.getStatistic()
                statisticBox = document.createElement('div');
                statisticBox.className = 'statistic-box';

        const   label = document.createElement('h1');
                label.textContent = 'Number of notes by category';

        const   statisticHeader = document.createElement('div')
                statisticHeader.className = 'statistic-header';

        const   headerIcon = document.createElement('img');
                headerIcon.className = 'note-icon';
                headerIcon.src = icons.default;

        const headerTitles = document.createElement('div');
                headerTitles.className = 'statistic-header-content';
                headerTitles.innerHTML = `<h2>Category</h2><h2>Active</h2><h2>Archived</h2>`;

        statisticHeader.append(headerIcon, headerTitles)
        statisticBox.append(label, statisticHeader);

        const availableCategories = Object.keys({...statistic.active, ...statistic.archived});

        if (availableCategories.length === 0){
                const   infoLabel = document.createElement('h3');
                        infoLabel.textContent = 'There are no any notes yet...'
                statisticBox.append(infoLabel)
        }
        availableCategories.forEach((category) => {
                const   activeCount =   statistic.active[category] ?
                                        statistic.active[category] :
                                        0;
                const   archivedCount =     statistic.archived[category] ?
                                            statistic.archived[category] :
                                            0;
                const   icon =  document.createElement('img');
                        icon.className = 'note-icon';
                        icon.src = icons[category];

                const   rowContent = document.createElement('div')
                        rowContent.className = 'statistic-row-content';
                        rowContent.innerHTML = `<h2>${category}</h2><h2>${activeCount}</h2><h2>${archivedCount}</h2>`;

                const row = document.createElement('div');
                        row.className = 'statistic-row';

                row.append(icon, rowContent)
                statisticBox.append(row)
        })
        document.body.append(statisticBox);


}
export default renderStatisticBox;