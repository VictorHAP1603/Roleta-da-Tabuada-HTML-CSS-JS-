let button1 = document.getElementById("generate1");
button1.onclick = function gerenate() {
  let randomNum1 = Math.floor(Math.random() * 10 + 0);
  let el1 = document.getElementById("ranNum1");
  el1.innerHTML = randomNum1;
};

let button2 = document.getElementById("generate2");
button2.onclick = function gerenate() {
  let randomNum2 = Math.floor(Math.random() * 10 + 0);
  let el2 = document.getElementById("ranNum2");
  el2.innerHTML = randomNum2;
};

function verificar() {
  let n1 = +document.querySelector("#ranNum1").innerHTML;
  let n2 = +document.querySelector("#ranNum2").innerHTML;

  if (!n1 || !n2) return alert("É obrigatório gerar os 2 números");

  let resultado = parseInt(n1) * parseInt(n2);

  return resultado;
}

function capturar() {
  const resultado = verificar();
  const capt = +document.querySelector("#resposta").value;
  const valorDigitado = document.querySelector(".valorDigitado");

  // aqui verifica se os numeros foram gerados, se nao foram, ocorre esse alert
  if (!resultado) return;

  // aqui verifica se o usario digitou uma resposta, se nao digitou, nao continua
  if (!capt) return alert("Digite uma resposta");

  if (capt === resultado) {
    valorDigitado.innerHTML += `<p>Parabéns! Você acertou!</p>`;
  } else {
    valorDigitado.innerHTML += `<p>Errado! Tente novamente</p>`;
    valorDigitado.innerHTML += `Valor correto: ${resultado}`;
  }
}
