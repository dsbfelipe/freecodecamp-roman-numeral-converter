const convertButton = document.getElementById("convert-btn");
const outputField = document.getElementById("output");

convertButton.addEventListener("click", () => {
  const input = document.getElementById("number").value;
  if(isInvalidInput(input)) {
    outputField.style.fontSize = "14px" 
    outputField.innerText = isInvalidInput(input);
  } else {
    outputField.style.fontSize = "20px";
    outputField.innerText = convertNumber(Math.floor(input));
  }
})

const romanNumerals = [
  {
    symbol: "M",
    value: 1000
  },
  {
    symbol: "CM",
    value: 900
  },
  {
    symbol: "D",
    value: 500
  },
  {
    symbol: "CD",
    value: 400
  },
  {
    symbol: "C",
    value: 100
  },
  {
    symbol: "XC",
    value: 90
  },
  {
    symbol: "L",
    value: 50
  },
  {
    symbol: "XL",
    value: 40
  },
  {
    symbol: "X",
    value: 10
  },
  {
    symbol: "IX",
    value: 9
  },
  {
    symbol: "V",
    value: 5
  },
  {
    symbol: "IV",
    value: 4
  },
  {
    symbol: "I",
    value: 1
  }
]

const isInvalidInput = (input) => {
  if (input === "") {
    return "Please enter a valid number";
  } else if (input < 1) {
    return "Please enter a number greater than or equal to 1";
  } else if (input > 3999) {
    return "Please enter a number less than or equal to 3999";
  } else {
    return false;
  }
}

const convertNumber = (input, output = "") => {
  if (input === 0) {
    return output;
  } else {
    return convertNumber(input - romanNumerals.find((element) => input - element.value >= 0).value, output + romanNumerals.find((element) => input - element.value >= 0).symbol);
  }
}