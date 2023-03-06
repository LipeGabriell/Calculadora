let numAtual = "0";
let numAntes = 0;
let result;

var display = document.getElementById("displayOutput");
var displayOperation = document.getElementById("displayOperation");
var displayNumAbove = document.getElementById("displayAbove");

let numOperacao;
let wichOperacao;

function setNumAntes() {
    numAntes = numAtual;
    numAtual = "0";
    refreshDisplay();
    refreshAbove();
}

function equalReset(resultado) {
    numAntes = "";
    numAtual = "0";
    refreshAbove()
    refreshOperator("")
    display.innerText = resultado;
}

function refreshDisplay() {
    display.innerText = numAtual;

}

function refreshAbove() {
    displayNumAbove.innerText = numAntes;
}

function refreshOperator(op) {
    displayOperation.innerText = op;
}

function equalOperation() {
    switch (displayOperation.innerText) {
        case "+":
            result = parseInt(numAntes) + parseInt(numAtual);
            equalReset(result);
            return;
        case "-":
            result = parseInt(numAntes) - parseInt(numAtual);
            equalReset(result);
            return;
        case "*":
            result = parseInt(numAntes) * parseInt(numAtual);
            equalReset(result);
            return;
        case "/":
            result = parseInt(numAntes) / parseInt(numAtual);
            equalReset(result);
            return;
    }
}

function operationDisplay(qualOperacao) {

    switch (qualOperacao) {
        case "+":
            refreshOperator("+");
            if (numAntes == 0) return setNumAntes();
            else {
                numAntes = parseInt(numAntes) + parseInt(numAtual);
                numAtual = "0";
                refreshDisplay();
                refreshAbove();
                return;
            }
        case "-":
            refreshOperator("-")
            if (numAntes == 0) return setNumAntes();
            else {
                numAntes = parseInt(numAntes) - parseInt(numAtual);
                numAtual = "0";
                refreshDisplay();
                refreshAbove();
                return;
            }

        case "*":
            refreshOperator("*")
            if (numAntes == 0) return setNumAntes();
            else {
                numAntes = parseInt(numAntes) * parseInt(numAtual);
                numAtual = "0";
                refreshDisplay();
                refreshAbove();
                return;
            }

        case "/":
            refreshOperator("/")
            if (numAntes == 0) return setNumAntes();
            else {
                numAntes = parseInt(numAntes) / parseInt(numAtual);
                numAtual = "0";
                refreshDisplay();
                refreshAbove();
                return;
            }

        default:
            break;
    }



}


document.querySelectorAll("div.button").forEach(button => {
    button.addEventListener("click", event => {
        qualButton = button.getAttribute("id");
        switch (qualButton) {
            case "num1":
                if (numAtual == "0") {
                    numAtual = "1"
                    refreshDisplay();
                    return numAtual;
                }
                else {
                    numAtual = numAtual + 1;
                    refreshDisplay();
                    return numAtual;
                }
            case "num2":
                if (numAtual == "0") {
                    numAtual = "2"
                    refreshDisplay();
                    return numAtual;
                }
                else {
                    numAtual = numAtual + 2;
                    refreshDisplay();
                    return numAtual;

                }
            case "num3":
                if (numAtual == "0") {
                    numAtual = "3"
                    refreshDisplay();
                    return numAtual;
                }
                else {
                    numAtual = numAtual + 3;
                    refreshDisplay();
                    return numAtual;

                }

            case "num4":
                if (numAtual == "0") {
                    numAtual = "4"
                    refreshDisplay();
                    return numAtual;
                }
                else {
                    numAtual = numAtual + 4;
                    refreshDisplay();
                    return numAtual;

                }

            case "num5":
                if (numAtual == "0") {
                    numAtual = "5"
                    refreshDisplay();
                    return numAtual;
                }
                else {
                    numAtual = numAtual + 5;
                    refreshDisplay();
                    return numAtual;

                }

            case "num6":
                if (numAtual == "0") {
                    numAtual = "6"
                    refreshDisplay();
                    return numAtual;
                }
                else {
                    numAtual = numAtual + 6;
                    refreshDisplay();
                    return numAtual;

                }

            case "num7":
                if (numAtual == "0") {
                    numAtual = "7"
                    refreshDisplay();
                    return numAtual;
                }
                else {
                    numAtual = numAtual + 7;
                    refreshDisplay();
                    return numAtual;

                }

            case "num8":
                if (numAtual == "0") {
                    numAtual = "8"
                    refreshDisplay();
                    return numAtual;
                }
                else {
                    numAtual = numAtual + 8;
                    refreshDisplay();
                    return numAtual;

                }

            case "num9":
                if (numAtual == "0") {
                    numAtual = "9"
                    refreshDisplay();
                    return numAtual;
                }
                else {
                    numAtual = numAtual + 9;
                    refreshDisplay();
                    return numAtual;

                }

            case "num0":
                if (numAtual == "0") {
                    numAtual = "0";
                    refreshDisplay();
                    return numAtual;
                }
                else {
                    numAtual = numAtual + 0;
                    refreshDisplay();
                    return numAtual;
                }

            case "soma":
                if (numAtual == "0") return;
                operationDisplay("+");
                break;
            case "subb":
                if (numAtual == "0") return;
                operationDisplay("-");
                break;
            case "multiply":
                if (numAtual == "0") return;
                operationDisplay("*");
                break;
            case "division":
                if (numAtual == "0") return;
                operationDisplay("/");
                break;
            case "equal":
                if (numAtual == "0") return;
                equalOperation();
                break;

            case "clear":
                numAtual = "0";
                numAntes = "";
                refreshDisplay();
                refreshAbove("");
                refreshOperator("")
                break;

            default:
                alert("erro!")
                break;
        }
    })
})

