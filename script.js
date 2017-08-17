//====================
//  Global Variables
//====================

var inputs = [''];
var i = 0;
var num1 = null;
var num2 = null;
var result =  null;
var buttonOperator = null;

//====================
//   Document Ready
//====================

//Click handlers on document load
$(document).ready(function() {
    $(".number").click(inputNumber);
    $(".operator").click(inputOperator);
    $(".equals").click(inputEquals);
    $("#clear").click(clear_all);
    $("#clear-entry").click(clear_entry);
});

//====================
//     Functions
//====================

function inputNumber() {
    if(inputs[i].indexOf('.') !== -1) { //IF DECIMAL IS PRESENT
        if($(this).text() == '.') {
            return;
        }
    }
    var buttonText = $(this).text();
    inputs[i] += buttonText;
    console.log(inputs);
    updateDisplay();
    console.log(num1, num2, buttonOperator);
}

function inputOperator() {

    if(inputs[2] != '' && inputs[2] != undefined && inputs[2] != null && inputs[2] != NaN){ // SUCCESSIVE OPERATION (1+1+2=4)
        inputEquals();
    }
    buttonOperator = $(this).text();
    if(inputs[1] != '' && inputs[1] != undefined && inputs[1] != null && inputs[1] != NaN){ // SUCCESSIVE OPERATION (1+1+2=4)
        return;
    }
    inputs.push(buttonOperator);
    console.log(inputs);
    i+=2;
    inputs.push('');
    updateDisplay();
    buttonOperator = inputs[1];
    return buttonOperator;
}


function inputEquals() {

    // if(result != null) {
    //     inputs[2] = num2;
    //     doMath();
    // }
    num1 = parseFloat(inputs[0]);
    num2 = parseFloat(inputs[2]);
    if(buttonOperator == '/' && num2 == '0') {
        $('p').text('Error');
        inputs = [""];
        i = 0;
        num1 = null;
        num2 = null;
        result =  null;
        buttonOperator = null;
        return;
    }
    doMath();
}


// Clears last user input
function clear_entry() {
    if(inputs[0] && inputs[1] && inputs[2] !== '') {
        inputs.pop();
        $('#screen').text(inputs[1]);
        inputs[2] = '';
    } else if(inputs[0] && inputs[1] && inputs[2] === '') {
        inputs = [inputs[0]];
        i = 0;
        $('#screen').text(inputs[0]);
    } else {
        inputs = [''];
        i = 0;
        $('#screen').text('');
    }
}

//Resets all values
function clear_all() {
    console.log("clear button clicked");
    inputs = [''];
    i = 0;
    num1 = null;
    num2 = null;
    result =  null;
    buttonOperator = null;
    $('#screen').text('');
    updateDisplay();
}

function doMath() {
    switch(buttonOperator) {
        case '+':
            result = num1 + num2;
            break;
        case '-':
            result = num1 - num2;
            break;
        case 'x':
            result = num1 * num2;
            break;
        case '/':
            result = num1 / num2;
            break;
    }
    inputs = [''];                   //RESETTING ARRAY
    i = 0;                           //RESETTING VALUE OF i
    inputs[i] = result;              //STORING RESULT IN INPUTS[0]
    updateDisplay();
}

function updateDisplay() {
    $('p').text(inputs[i]);
}


