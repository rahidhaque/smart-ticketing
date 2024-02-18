function getElement(elementId){
    const element= document.getElementById(elementId);
    return element;
}

function setBackgroundColor(elementId){
    const element= document.getElementById(elementId);
    element.classList.add('bg-[#1DD100]');
}
