function handleGetTicketId(event){
    if (event.target.tagName === 'BUTTON') {
        const buttonId = event.target.id;
        setBackgroundColor(buttonId);
    }
}

getElement('sit-info').addEventListener('click', handleGetTicketId);