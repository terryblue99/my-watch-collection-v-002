const DateValidation = (date) => {
  // date validated for format yyyy-mm-dd, yyyy-mm or yyyy
  return (
    date.match(/^\d{4}-(0[1-9]|1[012])-(0[1-9]|[12][0-9]|3[01])$/gm) ||
    date.match(/^\d{4}-(0[1-9]|1[012])$/gm) ||
    date.match(/^(19|20)\d{2}$/gm)
  )
}

export default DateValidation