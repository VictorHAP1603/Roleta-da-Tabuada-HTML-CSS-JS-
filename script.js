let button1 = document.getElementById("generate1");
button1.onclick = function gerenate() {
    let randomNum1 = Math.floor((Math.random() * 10) + 0);
    let el1 = document.getElementById("ranNum1");
    el1.innerHTML = randomNum1;

    let button2 = document.getElementById("generate2");
    button2.onclick = function gerenate() {
        let randomNum2 = Math.floor((Math.random() * 10) + 0);
        let el2 = document.getElementById("ranNum2");
        el2.innerHTML = randomNum2;

    }
}

function verificar() {
    let n1 = document.querySelector(".ranNum1").value;
    let n2 = document.querySelector(".ranNum2").value;
    let resultado = parseInt(n1) * parseInt(n2);
    document.querySelector(".resultado").innerHTML = resultado;

}
