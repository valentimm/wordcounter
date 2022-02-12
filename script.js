function count() {
    var texto = document.getElementById("textarea").value;
    if (texto == ""){
        alert("Por favor, insira um texto")
    } else{
        var resultado = texto.split(" ");
        var tamanho = resultado.length;
        if (tamanho == 1){
            alert("Seu texto contém " + tamanho +" palavra");
        } else{
            alert("Seu texto contém " + tamanho +" palavras");
        }
    }
}