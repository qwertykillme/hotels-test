import moment from "moment";

function getMonthsArray(): moment.Moment[] {
  const currentDate = new Date();
  const result = [];

  const startMonth = currentDate.getMonth();
  const startYear = currentDate.getFullYear();

  for (let i = 0; i <= 12; i++) {
    const newDate = new Date(startYear, startMonth + i, 1);

    const month = newDate.getMonth() + 1;
    const year = newDate.getFullYear();

    result.push(moment(new Date(year, month)));
  }

  return result;
}

export default getMonthsArray;
