function addListener(id, eventType, callback) {
    const node = document.getElementById(id);
    if (node) {
        node.addEventListener(eventType, callback);
    }
}

function getInputValue(id){
    const input = document.getElementById(id);

    if (input){
        return input;
    }
    return '';
}

function setInputValue(id, value) {
    const input = document.getElementById(id);
    if (input) {
        input.value = value;
        return true;
    }
    return false;
}

function setHTMLValue(id, value) {
    const node = document.getElementById(id);
    if (node) {
        node.innerHTML = value;
        return true;
    }
    return false;
}

function setDisable(id, disable = true) {
    const node = document.getElementById(id);
    if (node) {
        node.disable = disable;
        return true;
    }
    return false;
}

module.exports = {
    addListener,
    getInputValue,
    setInputValue,
    setHTMLValue,
    setDisable
};