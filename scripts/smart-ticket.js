let selectedSeats = [];
let selectedSeatsCount = 0;
let totalSeatsLeft = getElementValueFromText('total-seats');

function handleGetTicketId(event) {
    //added to prevent the same id to be selected twice
    event.stopPropagation();

    //select seat
    if (event.target.tagName === 'BUTTON') {
        const buttonId = event.target.id;

        //selected seat change color

        //prevent user from selecting same seat 
        if (selectedSeats.includes(buttonId)) {
            alert(`Seat of id ${buttonId} is already selected`);
            return;
        }

        //prevent user from selecting more than 4 seats
        if (selectedSeatsCount < 4) {
            selectedSeatsCount++;
            totalSeatsLeft--;
            setElementValueToText('total-seats', totalSeatsLeft);
            setBackgroundColor(buttonId);
            selectedSeats.push(buttonId);
        }

        if (selectedSeatsCount === 4) {
            alert("Maximum Sit Limit Reached");
            return;
        }
    }
}

document.addEventListener('click', handleGetTicketId);