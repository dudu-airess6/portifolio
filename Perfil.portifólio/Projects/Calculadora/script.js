var tela = document.getElementById("display");
var aux = "";

tela.innerHTML = 0;

function clean() {
    aux = "";
    tela.innerHTML = "0";  
}

function insert(valor) {
    aux = aux + valor;
    tela.innerHTML = aux;   
}

function back() {
    aux = aux.slice(0, -1);
    tela.innerHTML = aux === "" ? "0" : aux;
}

function calcular() {
    var expressao = aux.replace(/x/gi, "*");
    var resultado = eval(expressao);
    
    tela.innerHTML = resultado;
    aux = String(resultado);
}

document.addEventListener("keydown", function(event) {
    var tecla = event.key;
    var teclasPermitidas = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9", "+", "-", "*", "/", ".", "x", "X"];

    if (teclasPermitidas.includes(tecla)) {
        insert(tecla);
    }

    if (tecla === ",") {
        insert(".");
    }

    if (tecla === "Enter" || tecla === "=") {
        event.preventDefault(); 
        calcular();
    }

    if (tecla === "Backspace") {
        back();
    }

    if (tecla === "Escape" || tecla.toLowerCase() === "c") {
        clean();
    }
});