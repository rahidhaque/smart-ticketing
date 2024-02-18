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

function getInputFieldText(inputField){
    const inputFieldText= document.getElementById(inputField);
    const inputValueText= inputFieldText.value;
    return inputValueText;
}


function setElementValueToText(elementId, value){
    const element= document.getElementById(elementId);
    element.innerText=value;
}

function hideElement(elementName){
    const elementSection= document.getElementById(elementName);
    elementSection.classList.add('hidden');
}

function showElement(elementName){
    const elementSection= document.getElementById(elementName);
    elementSection.classList.remove('hidden');
}


