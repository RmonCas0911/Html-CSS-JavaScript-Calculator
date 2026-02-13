const inputValue = document.getElementById("input");

// BOTONES NUMÉRICOS
document.querySelectorAll(".Numero").forEach(function (item) {
    item.addEventListener("click", function (e) {

        if (inputValue.innerText === "0" || inputValue.innerText === "NaN") {
            inputValue.innerText = "";
        }

        inputValue.innerText += e.target.innerText;
    });
});


document.querySelectorAll(".Operacion, .Simbolo").forEach(function (item) {
    item.addEventListener("click", function (e) {

        let valor = e.target.innerText;
        let textoActual = inputValue.innerText;
        let lastValue = textoActual[textoActual.length - 1];

        // IGUAL
        if (valor === "=") {
            try {
                inputValue.innerText = eval(textoActual);
            } catch {
                inputValue.innerText = "NaN";
            }
        }

        // AC
        else if (valor === "AC") {
            inputValue.innerText = "0";
        }

        // DEL
        else if (valor === "DEL") {
            inputValue.innerText = textoActual.slice(0, -1);
            if (inputValue.innerText === "") {
                inputValue.innerText = "0";
            }
        }

        // OPERADORES
        else {
            if (!isNaN(lastValue)) {
                inputValue.innerText += valor;
            }
        }

    });
});
