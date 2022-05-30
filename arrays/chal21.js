//Create a function that takes two dates and returns the number of days between the first and second date.

function daysBetween(firstDate, secondDate) {
  let date1 = new Date(firstDate);
  let date2 = new Date(secondDate);
  let timeDiff = Math.abs(date2.getTime() - date1.getTime());
  let diffDays = Math.ceil(timeDiff / (1000 * 3600 * 24));
  return diffDays;
}