let selectedSeats = [];
let selectedSeatsCount= 0;
function handleGetTicketId(event){
    event.stopPropagation();
    if (event.target.tagName === 'BUTTON') {
        const buttonId = event.target.id;
        setBackgroundColor(buttonId);

        
        if (selectedSeats.includes(buttonId)) {
            alert(`Seat of id ${buttonId} is already selected`);
            return;
        }


        if(selectedSeatsCount<3){
            selectedSeatsCount++;
            selectedSeats.push(buttonId);
        }

        else{
            alert("Maximum Sit Limit Reached");
            return;
        }
    }
}

document.addEventListener('click', handleGetTicketId);