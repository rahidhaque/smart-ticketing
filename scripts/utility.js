function getElement(elementId){
    const element= document.getElementById(elementId);
    return element;
}

function getElementTagNameCollection(tagName){
    const elementCollection= document.getElementsByTagName(tagName);
    return elementCollection;
}

function setBackgroundColor(elementId){
    const element= document.getElementById(elementId);
    element.classList.add('bg-[#1DD100]');
}

function getElementValueFromText(elementId){
    const element= document.getElementById(elementId);
    const elementValue= parseInt(element.innerText);
    return elementValue; 
}

function setElementValueToText(elementId, value){
    const element= document.getElementById(elementId);
    element.innerText=value;
}

