export const deleteTicket = id => ({
  type: 'DELETE_TICKET',
  id
});

export const addTicket = (ticket) => {
  const { names, location, issue, id } = ticket;
  return {
    type: 'ADD_TICKET',
    names: names,
    location: location,
    issue: issue,
    id: id
  }
}

export const updateTime = (id, formattedWaitTime) => ({
  type: 'UPDATE_TIME',
  id: id,
  formattedWaitTime: formattedWaitTime
});

export const toggleForm = () => ({
  type: 'TOGGLE_FORM'
});