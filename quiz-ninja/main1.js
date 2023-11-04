const quiz = [
  ["Qual o nome real do Superman?", "Clark Kent"],
  ["Qual o nome real da Mulher-Maravilha?", "Diana Prince"],
  ["Qual o nome real do Batman?", "Bruce Wayne"],
]

function start(quiz) {
  let score = 0;

  for (const [question, answer] of quiz) {
    const response = ask(question);
    check(response, answer, score)
  }

  gameOver(score)
}

function ask(question) {
  return prompt(question)
}

function check(response, answer, score) {
  if (response == answer) {
    alert('Correct')
    score++
  }
  else {
    alert('Resposta errada. A resposta correta é ' + answer)
  }
}

function gameOver(score) {
  alert('Fim do jogo. Você acertou ' + score + ' pontos')
}

start(quiz)