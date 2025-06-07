// Deboune -> "skipping the tasks" because the data present inside the tasks is continouslty updating and when the updation stops we perform the task that contains the whole data at once.

// example 
// sending request to the backend server when the user inputs the data in input box, the user continous updates the data and hence each time the request will be send to the backend server. here "deboucing" will be applied and will detect if the user adds input if not we will send the request to backend server


// DOM / document is provided by the browser that represents the webpage and using this we will be making the our websites / wepages dynmic (will change the content / appearence / logic) without reloading the browser

const firstNumberInput = document.querySelector("#firstnumber");
const secondNumberInput = document.querySelector("#secondnumber");
const sum = document.querySelector(".sum");

// there are two types of eventlistners present for input tag which will be called when the value will be changed 1. input, change

// input fires immediately whenevener the value present in input tag is changed (required in real-time-search)
// change will be called whenever the value is changed and user loses the focus from the input tag 
firstNumberInput.addEventListener("input", debounceCalculateSum);
secondNumberInput.addEventListener("input", debounceCalculateSum);
let timeoutId = undefined;

function debounceCalculateSum() {
    // calling the logic after some delay / if the user again call this function clears the previous callback function / logic and launch the new logic with the updated data
    
    if(timeoutId) {
        clearTimeout(timeoutId); // skipping the task
    }

    setTimeout(function() {
        const firstnumber = firstNumberInput.value;
        const secondnumber = secondNumberInput.value;

        if(!firstnumber || !secondnumber) {
            sum.innerHTML = "";
            return;
        }

        sum.innerHTML = `<b>${parseInt(firstnumber) + parseInt(secondnumber)}</b>`
    }, 1000); // if we mention only this logic than the logic will be called for every data updation with the delay. but we want if to clear the previous logic


}