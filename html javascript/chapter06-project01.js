function isBlank(inputField) {
    if(inputField.type ==  "checkbox") {
        if (inputField.checked)
            return false;
        else
            return true;
    }
    if (inputField.type == "text") {
        if(inputField.value =="")
            return true;
        else
            return false;
    }
    if (inputField.type == "number") {
        if(inputField.value == "")
            return true;
    }
    if (inputField.type == "number") {
        if(inputField.value == "")
            return true;
        else
            return false;
    }
}

function makeClean(inputField) {
    inputField.style.backgroundColor = "#FFFFFF";
    inputField.parentNode.style.backgroundColor = "#FFFFFF";
    inputField.parentNode.style.color = "#000000";
}


function makeRed(inputField) {
    inputField.style.backgroundColor = "#AA0000";
    inputField.parentNode.style.backgroundColor = "#AA0000";
    inputField.parentNode.style.color = "#FFFFFF";
}

window.onload = function () {
    var mainForm = document.getElementById("mainForm");

    mainForm.onsubmit = function (e) {
        var requireInputs = document.querySelectorAll(".required");
        for (var i = 0; i < requireInputs.length; i++) {
            if (isBlank(requireInputs[i])) {
                e.preventDefault();
                makeRed(requireInputs[i]);
            }
            else {
                makeClean(requireInputs[i]);
            }
        }
    }
}