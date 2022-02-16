function count() {
    const textInput = document.getElementById("textarea").value;
    let numberOfWords = textInput.split(" ").length;
    const errorMessage = "Por favor, insira um texto";
    const returnMessage = `Seu texto contém ${numberOfWords} palavra`;

    if (numberOfWords = 0) {
        alert(errorMessage);
    } else if (numberOfWords == 1) {
        alert(returnMessage);
    } else {
        alert(returnMessage + 's');
    }
}
