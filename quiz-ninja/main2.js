const quiz = [
  {name: "Qual o nome real do Superman?", realName: "Clark Kent"},
  {name: "Qual o nome real da Mulher-Maravilha?",  realName: "Diana Prince"},
  {name: "Qual o nome real do Batman?",  realName: "Bruce Wayne"},
]


const game = {
  start: function(quiz) {
    this.questions = [...quiz]
    this.score = 0;
  
    for (const question of this.questions) {
      this.question = question
      this.ask();
    }
  
    this.gameOver()
  },

  ask: function () {
    const question =  'Qual o nome real do ' + this.question.name + "?"
    const response = prompt(question)
    this.check(response)
  },

  check: function(response) {
    const answer = this.question.realName
    if (response == answer) {
      alert('Correct')
      this.score++
      console.log(this.score)
    }
    else {
      alert('Resposta errada. A resposta correta é ' + answer)
    }
  },

  gameOver: function () {
    alert('Fim do jogo. Você acertou ' + this.score + ' pontos')
  }
  
}


game.start(quiz)