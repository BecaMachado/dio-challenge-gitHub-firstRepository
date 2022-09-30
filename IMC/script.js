function start() {
  var buttonCalculateImc = document.querySelector('#button-calculate-imc');
  buttonCalculateImc.addEventListener('click', handleButtonClick);

  var inputWeight = document.querySelector('#input-weight');
  var inputHeight = document.querySelector('#input-height');
  var textResult = document.querySelector('#text-result');

  inputWeight.addEventListener('input', handleButtonClick);
  inputHeight.addEventListener('input', handleButtonClick);
  textResult.addEventListener('input', handleButtonClick);

  handleButtonClick();
}

function calculateImc(weight, height) {
  return weight / (height * height)
}

function tableIMC () {
    var imc2 = weight/(height * height);
    var returno ="";
    if (imc2 < 18.5){
      returno ("Abaixo do peso");
    } else if (imc2 >= 18.5 && imc2 < 25){
      returo("Peso normal");
    } else if (imc2 >= 25 && imc2 < 30){
      returno ("Sobrepeso"); 
    } else if (imc2 >= 30 && imc2 < 35){
      returno ("Obesidade Grau I ");
    } else if (imc2 >= 35 && imc2 < 40) {
      returno ("Obesidade Grau II ");
    } else {
      returno ("Obesidade Grau III - morbida");
    }
    var textResult = document.querySelector('#text-result');
    textResult.textContent = returno;
  }  
 

function handleButtonClick() {
  var inputWeight = document.querySelector('#input-weight');
  var inputHeight = document.querySelector('#input-height');
  var imcResult = document.querySelector('#imc-result');
  var textResult = document.querySelector('#text-result');

  var weight = Number(inputWeight.value);
  var height = Number(inputHeight.value);

  var imc = calculateImc(weight, height);
  var formattedImc = imc.toFixed(2).replace('.', ',');

  imcResult.textContent = formattedImc;
  textResult.textContent = returno;

}
start();