const celsius1 = document.getElementById("celsius");
const fahrenheit1 = document.getElementById("fahrenheit");
const kelvin1 = document.getElementById("kelvin");

function computeTemp(event) {
  const tempValue = +event.target.value;

  switch (event.target.name) {
    case "celsius":
      kelvin1.value = (tempValue + 273.15).toFixed(2);
      fahrenheit1.value = (tempValue * 1.8 + 32).toFixed(2);
      break;
    case "fahrenheit":
      kelvin1.value = (tempValue - 32) / 1.8;
      celsius1.value = (tempValue - 32) / 1.8 + 273.15;
      break;
    case "kelvin":
      celsius1.value = (tempValue - 273.15) * 1.8 + 32;
      fahrenheit1.value = tempValue - 273.15;
      break;
    default:
      break;
  }
}
