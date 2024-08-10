const form = document.getElementById("from-atividade");
const imgAprovado = '<img src="/images/aprovado.png" alt="Emoji festevanjo">';
const imgReprovado = '<img src="/images/reprovado.png" alt="Emoji triste">';
const atividades = [];
const notas = [];
const spanAprovado = '<span class="resultado aprovado">Aprovado</span>';
const spanReprovado = '<span class="resultado reprovado">Reprovado</span>';
const notaMinima = parseFloat(prompt("Digite a nota mínima"));

let linhas = "";

form.addEventListener("submit", function (e) {
  e.preventDefault();
  adicionarLinha();
  atualizaTabela();
  atualizaMediaFinal();
});

function adicionarLinha() {
  const inputNomeAtividade = document.getElementById("nome-atividade");
  const inputNotaAtividade = document.getElementById("nota-atividade");

  if (atividades.includes(inputNomeAtividade.value)) {
    alert(`A atividade: ${inputNomeAtividade.value} já foi inserida`);
  } else {
    atividades.push(inputNomeAtividade.value);
    notas.push(parseFloat(inputNotaAtividade.value));

    let linha = "<tr>";
    linha += `<td>${inputNomeAtividade.value}</td>`;
    linha += `<td>${inputNotaAtividade.value}</td>`;
    linha += `<td>${
      inputNotaAtividade.value >= notaMinima ? imgAprovado : imgReprovado
    }</td>`;
    linha += `</tr>`;

    linhas += linha;
  }

  inputNomeAtividade.value = "";
  inputNotaAtividade.value = "";
}

function atualizaTabela() {
  const corpoTabela = document.querySelector("tbody");
  corpoTabela.innerHTML = linhas;
}

function atualizaMediaFinal() {
  let mediaFinal = calcularMediaFinal();
  document.getElementById("media-final-valor").innerHTML = mediaFinal;
  document.getElementById("media-final-resultado").innerHTML =
    mediaFinal >= notaMinima ? spanAprovado : spanReprovado;

  console.log(mediaFinal);
}

function calcularMediaFinal() {
  let somaDasnotas = 0;

  for (let i = 0; i < notas.length; i++) {
    somaDasnotas += notas[i];
  }

  return somaDasnotas / notas.length;
}
