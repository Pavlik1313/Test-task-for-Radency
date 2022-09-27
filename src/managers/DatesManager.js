const reg = /(?<!\d)((30|31)|([012]?\d))(?:([./-] ?)| )((0?\d)|(1[012]))(?:([./-] ?)| )(\d{2,4})(?!\d)/g;

function findDates (text) {
    let dates = []
    Array.from(text.matchAll(reg)).map((element) => {
            const day = element[1];
            const mouth = element[5];
            const year = element[9];
            const date = new Date(`${mouth}.${day}.${year}`).toDateString();
            if (date!=='Invalid Date'){
                dates = [...dates, date.slice(4)];
            }

        }
    )
    return dates.join('<br/>');
}
function highlightDates (text) {
    return (text.replace(reg, `<b class = 'date-in-text'>$&</b>`))
}

export {findDates, highlightDates}