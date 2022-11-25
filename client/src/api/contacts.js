import instance from 'api'

export const fetchContacts = () => instance.get('contacts').then((response) => response).catch(() => ({}))

export const addContact = body => instance.post('contacts', body).then((response) => response).catch(() => ({}))

export const removeContact = id => instance.delete(`contacts/${id}`).then((response) => response).catch(() => ({}))
