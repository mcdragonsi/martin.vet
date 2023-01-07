const date = new Date('January 1, 2023');

function yearsToToday(date) {
    const today = new Date();
    return Math.abs(today.getFullYear() - date.getFullYear());
}