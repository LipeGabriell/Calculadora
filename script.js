let numAtual = "0";
var display = document.getElementById("displayOutput");
let numOperacao = null;
let wichOperacao = null;


function refreshDisplay() {
    display.innerText = numAtual;
}

document.querySelectorAll("div.button").forEach(button => {
    button.addEventListener("click", event => {
        qualButton = button.getAttribute("id");
        switch (qualButton) {
            case "num1":
                if (numAtual == "0") return numAtual = "1";
                else {
                    numAtual = numAtual + 1;
                    refreshDisplay();
                }
                break;
            case "num2":
                if (numAtual == "0") return numAtual = "2";
                else {
                    numAtual = numAtual + 2;
                    refreshDisplay();
                }
                break;
            case "num3":
                if (numAtual == "0") return numAtual = "3";
                else {
                    numAtual = numAtual + 3;
                    refreshDisplay();
                }
                break;
            case "num4":
                if (numAtual == "0") return numAtual = "4";
                else {
                    numAtual = numAtual + 4;
                    refreshDisplay();
                }
                break;
            case "num5":
                if (numAtual == "0") return numAtual = "5";
                else {
                    numAtual = numAtual + 5;
                    refreshDisplay();
                }
                break;
            case "num6":
                if (numAtual == "0") return numAtual = "6";
                else {
                    numAtual = numAtual + 6;
                    refreshDisplay();
                }
                break;
            case "num7":
                if (numAtual == "0") return numAtual = "7";
                else {
                    numAtual = numAtual + 7;
                    refreshDisplay();
                }
                break;
            case "num8":
                if (numAtual == "0") return numAtual = "8";
                else {
                    numAtual = numAtual + 8;
                    refreshDisplay();
                }
                break;
            case "num9":
                if (numAtual == "0") return numAtual = "9";
                else {
                    numAtual = numAtual + 9;
                    refreshDisplay();
                }
                break;
            case "num0":
                if (numAtual == "0") return numAtual = "0";
                else {
                    numAtual = numAtual + 0;
                    refreshDisplay();
                }
                break;
            case "soma":
                console.log("é pra somar");
                break;
            case "subb":
                console.log("é pra subtrair");
                break;
            case "multiply":
                console.log("é pra multiplicar");
                break;
            case "division":
                console.log("é pra dividir");
                break;
            case "equal":
                console.log("é pra resolver o q foi pedido");
                break;
            default:
                alert("erro!")
                break;
        }
    })
})

