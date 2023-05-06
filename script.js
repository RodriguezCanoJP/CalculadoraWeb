function clearScreen() {
        document.getElementById("result").value = "";
    }
    
    // Muestra los valores en pantalla
    function display(value) {
        document.getElementById("result").value += value;
    }
    
    // Retorna el resultado
    function calculate() {
        var p = document.getElementById("result").value;
        var q = eval(p);
        document.getElementById("result").value = q;
    }