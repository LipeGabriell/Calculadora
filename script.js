//#region Variaveis

let numAtual = "";
let numAntes = 0;

const display = document.getElementById("displayOutput");
const displayOperation = document.getElementById("displayOperation");
const displayNumAbove = document.getElementById("displayAbove");
const displayResult = document.getElementById("displayResult");
//#endregion


//#region Funções

function limparCalc() {
    numAtual = "";
    numAntes = 0;
    refreshDisplay();

}

function testeNum(qualoperacao) {

    try {

        if (numAntes == 0) {
            numAntes = numAtual;
            numAtual = "";
            refreshAbove();
            return true;
        }

        if (numAtual == 0) {
            numAtual = numAntes;
            numAntes = "";
            refreshAbove();
            return true;
        }

        return false;
    }
    finally {
        refreshOperator(qualoperacao);
    };
}

function refreshDisplay() {
    display.innerText = numAtual;

}

function clearAllDisplay() {
    display.innerText = "";
    displayNumAbove.innerText = "";
    displayOperation.innerText = "";

}

function refreshAbove() {
    displayNumAbove.innerText = numAntes;
}

function refreshOperator(op) {
    displayOperation.innerText = op;
}

function clear() {
    numAtual = "";
    numAntes = 0;
}

function calcular(qualoperacao) {

    switch (qualoperacao) {
        case "+":
            if (testeNum(qualoperacao) == true) break;
            numAtual = parseInt(numAtual) + parseInt(numAntes);
            numAntes = "";
            break;
        case "-":
            if (testeNum(qualoperacao) == true) break;
            numAtual = parseInt(numAtual) - parseInt(numAntes);
            numAntes = "";
            break;
        case "*":
            if (testeNum(qualoperacao) == true) break;
            numAtual = parseInt(numAtual) * parseInt(numAntes);
            numAntes = "";
            break;
        case "/":
            if (testeNum(qualoperacao) == true) break;
            numAtual = parseInt(numAtual) / parseInt(numAntes);
            numAntes = "";
            break;
        case "=":
            calcular(displayOperation.innerText);
            break;
        case "Delete":
            numAtual -= "";
            refreshDisplay();
            break;

        case "Clear":
            clearAllDisplay();
            clear();
            break;



    }
}



//#endregion


//#region Eventos click botão

document.querySelectorAll("div.button.num").forEach(button => {
    button.addEventListener("click", event => {

        numAtual += button.innerText;
        refreshDisplay();

    })
})

document.querySelectorAll("div.button.operation").forEach(button => {
    button.addEventListener("click", event => {

        if (button.innerText == "Clear") limparCalc();
        else calcular(button.innerText);

        refreshDisplay();
    })
})

//#endregion
