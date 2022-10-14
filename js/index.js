const inputBill = document.getElementById("bill");
const inputPeople = document.getElementById("people");
const inputtip = document.getElementById("tip");
const calculateBtn = document.getElementById("calculate");
const resetBtn = document.querySelector(".form_label reset");
result = document.querySelector(".result");

let filterInput;
result.style.display = "block";

splitBill = (calculateBill) => {
    let bill = inputBill.value;
    let people = inputPeople.value;
    let tip = inputtip.value;

    calculateBill = ((((tip/100) + 1) * bill) / people).toFixed(2);

    result.style.display = "block";
    document.querySelector(".result").innerHTML = `Every person has to pay ${calculateBill} rupees.`;
    
    return calculateBill;
}

calculateBtn.addEventListener("click", splitBill);

function clearInput() {
    inputBill.value = "";
    inputPeople.value = "";
    inputtip.value = "";

    result.style.display = "none"
}
resetBtn.addEventListener("click", clearInput);