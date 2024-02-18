let selectedSeats = [];
let selectedSeatsCount = 0;
let totalSeatsLeft = getElementValueFromText('total-seats');
let totalPrice = 0;


function handleGetTicketId(event) {
    //added to prevent the same id to be selected twice
    event.stopPropagation();

    if (event.target.id === 'apply-coupon') {
        applyCoupon();
        return;
    }

    if (event.target.id === 'btn-modal-open'){
        return;
    }
    if (event.target.id === 'btn-modal-close'){
        return;
    }

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
            setElementValueToText('selected-seats-count', selectedSeatsCount);
            setBackgroundColor(buttonId);
            selectedSeats.push(buttonId);

            //new element created and append child to table body
            const seatsBody = document.getElementById('table-body');
            const seatsTr = document.createElement('tr');

            const seatsTd1 = document.createElement('td');
            seatsTd1.innerText = buttonId;
            seatsTr.appendChild(seatsTd1);
            const seatsTd2 = document.createElement('td');
            seatsTd2.innerText = 'Economy';
            seatsTr.appendChild(seatsTd2);
            const seatsTd3 = document.createElement('td');
            seatsTd3.innerText = '550';
            seatsTd3.setAttribute('id', 'seat-price');
            seatsTr.appendChild(seatsTd3);
            seatsBody.appendChild(seatsTr);


            //total Price
            const priceValue = getElementValueFromText('seat-price');
            totalPrice = priceValue + totalPrice;
            setElementValueToText('total-seat-price', totalPrice);
            setElementValueToText('grand-total-seat-price', totalPrice);
        }

        if (selectedSeatsCount === 4) {
            const elementCoupon = document.getElementById('apply-coupon');
            elementCoupon.removeAttribute('disabled');
            alert("Maximum Sit Limit Reached");
            return;
        }

        if(selectedSeatsCount>0){
            const elementModal= document.getElementById('btn-modal-open');
            elementModal.removeAttribute('disabled',true);
            return;
        }

    }
}

document.addEventListener('click', handleGetTicketId);


function applyCoupon() {
    event.stopPropagation();
    const totalSeatPrice = getElementValueFromText('total-seat-price');
    const couponCode = getInputFieldText('coupon-field');
    if (couponCode === 'NEW15' || couponCode === 'Couple 20') {
        hideElement('coupon-div');
        showElement('discount-div');
        if (couponCode === 'NEW15') {
            const discount = totalSeatPrice * 0.15;
            setElementValueToText('discounted-seat-price', discount);
            const discountedPrice = totalSeatPrice - discount;
            setElementValueToText('grand-total-seat-price', discountedPrice);
        }

        if (couponCode === 'Couple 20') {
            const discount = totalSeatPrice * 0.20;
            setElementValueToText('discounted-seat-price', discount);
            const discountedPrice = totalSeatPrice - discount;
            setElementValueToText('grand-total-seat-price', discountedPrice);
        }
    }
    else {
        alert("Please Write the Correct Coupon Code");
        return;
    }
}

