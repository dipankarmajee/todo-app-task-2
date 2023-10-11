export const DateFormat = (currentDate) => {
  // Define an array to store the month names
  const monthNames = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];

  // Extract the month, day, and year
  const month = monthNames[currentDate.getMonth()]; // Get the month name
  const day = currentDate.getDate(); // Get the day
  const year = currentDate.getFullYear(); // Get the year

  // Format the date string
  return `${month} ${day.toString().padStart(2, "0")}, ${year}`;
};
