function linhaPreview(cod){
    let linha = linhas[cod];
    let size = linha.length;
    let cnsl = document.getElementById('cnsl');
    let btnGerarLinha = document.getElementById('btnGerarLinha');
    cnsl.innerHTML = '';
    for(let i = 0; i < size; i++){
        let nrow = `<p>
        ${linha[i][4]}&emsp;
        ${linha[i][2]}&emsp;
        ${linha[i][10]}&emsp;
        ${linha[i][11].slice(0, -2) + ":" + linha[i][11].slice(-2)}&emsp;
        ${linha[i][12].slice(0, -2) + ":" + linha[i][12].slice(-2)}&emsp;
        ${linha[i][22]}&emsp;
        ${linha[i][23]}&emsp;
        ${linha[i][25]}&emsp;
        </p>`;
        cnsl.innerHTML += nrow;
    }
    btnGerarLinha.innerHTML = `Gerar linha <b>${cod}</b>`; // Ajusta innerHTML do botao para gerar linha
    btnGerarLinha.dataset.linha = cod;
    btnGerarLinha.classList.remove('d-none'); // Exibe botao para gerar a linha
    
}