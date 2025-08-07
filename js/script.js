function carregarDocumento() {
  const tipo = document.getElementById("documentoSelecionado").value;
  const editor = document.getElementById("conteudoDocumento");

  fetch(`${tipo}.html`)
    .then(response => response.text())
    .then(data => {
      editor.value = data;
    })
    .catch(error => {
      editor.value = "Erro ao carregar o documento.";
      console.error(error);
    });
}

