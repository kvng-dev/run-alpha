function formatTimeAsTimestamp (timeString) {
  if (!timeString) return null; // Handle empty input

  const date = new Date();
  const [hours, minutes] = timeString.split(":"); // Extract hours and minutes

  date.setHours(hours, minutes, 0, 0); // Set time while keeping today's date

  return date.toTimeString().split(" ")[0]; // Return HH:mm:ss format
};

export default formatTimeAsTimestamp ;

