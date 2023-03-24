'use strict'

export const getContacts = async function() {
    
    let url = `http://localhost:8080/v1/whatsapp/contacts?id=1`

    let response = await fetch(url)
    let contactsData = await response.json()

    return {...contactsData.contatos}
}

