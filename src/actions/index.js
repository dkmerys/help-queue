export const deleteTicket = id => ({
  type: 'DELETE_TICKET',
  id
});

export const updateTime = (id, formattedWaitTime) => ({
  type: 'UPDATE_TIME',
  id: id,
  formattedWaitTime: formattedWaitTime
});

export const toggleForm = () => ({
  type: 'TOGGLE_FORM'
});