let numeroSecreto = Math.floor(Math.random() * 11);

function Chutar() {
  let chute = parseInt(document.getElementById("valor").value);
  if (chute == numeroSecreto) {
    document.getElementById("resultado").innerHTML = "Você Acertou!!!";
  } else if (chute > 10 || chute < 0) {
    document.getElementById("resultado").innerHTML =
      "O chute deve estar entre 0 e 10!";
  } else if (chute < numeroSecreto) {
    document.getElementById("resultado").innerHTML =
      "O chute é Menor que o número Secreto";
  } else {
    document.getElementById("resultado").innerHTML =
      "O chute é Maior que o número secreto";
  }
}