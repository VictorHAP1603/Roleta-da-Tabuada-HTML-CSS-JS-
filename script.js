let button = document.getElementById("generate1");
button.onclick = function gerenate() {
    let randomNum = Math.floor((Math.random() * 10) + 0);
    let el = document.getElementById("ranNum1");
    el.innerHTML = randomNum;

    let button = document.getElementById("generate2");
    button.onclick = function gerenate() {
        let randomNum = Math.floor((Math.random() * 10) + 0);
        let el = document.getElementById("ranNum2");
        el.innerHTML = randomNum;

    }
}

function multiplica() {

}