const DateValidation = (date, type) => {
  // date validated for format yyyy-mm-dd, yyyy-mm, yyyy or 0

  if (type === 'edit') {
      return (
        date.match(/^\d{4}-(0[1-9]|1[012])-(0[1-9]|[12][0-9]|3[01])$/gm) ||
        date.match(/^\d{4}-(0[1-9]|1[012])$/gm) ||
        date.match(/^(19|20)\d{2}$/gm) 
      )
  } else if (type === 'add') {
    return (
      date.match(/^\d{4}-(0[1-9]|1[012])-(0[1-9]|[12][0-9]|3[01])$/gm) ||
      date.match(/^\d{4}-(0[1-9]|1[012])$/gm) ||
      date.match(/^(19|20)\d{2}$/gm) ||
      Number(date) === 0 // For watch-related records.
                         // Used when adding records that are not related to a specific watch.
    ) 
  } else alert('*** ERROR: ' + type + ' IS NOT add OR edit')
}

export default DateValidation
