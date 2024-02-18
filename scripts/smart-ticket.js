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
            const seatsBody= document.getElementById('table-body');
            const seatsTr= document.createElement('tr');
            const seatsTd1= document.createElement('td');

            seatsTd1.innerText= buttonId;
            seatsTr.appendChild(seatsTd1);
            const seatsTd2= document.createElement('td');
            seatsTd2.innerText= 'Economy';
            seatsTr.appendChild(seatsTd2);
            const seatsTd3= document.createElement('td');
            seatsTd3.innerText= '550';
            seatsTr.appendChild(seatsTd3);
            seatsBody.appendChild(seatsTr);
            
            setElementValueToText('total-seats', totalSeatsLeft);
            setElementValueToText('selected-seats-count', selectedSeatsCount);
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

function addSeats(){
    const seatsTr= document.createElement('tr');

}