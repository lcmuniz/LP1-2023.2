const perguntas = [
  ["Qual o nome real do Superman?", "Clark"],
  ["Qual o nome real do Batman?", "Bruce"],
  ["Qual o nome real do Aquaman?", "Arthur"],
];

let acertos = 0;
for (let i = 0; i < perguntas.length; i++) {
  const resposta = prompt(perguntas[i][0]);
  if (resposta == perguntas[i][1]) {
    alert("Você acertou");
    acertos++;
  } else {
    alert("Errrrooouuuu!");
  }
}
alert(`Você acertou ${acertos} perguntas`);
