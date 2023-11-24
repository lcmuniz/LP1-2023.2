const questionario = [
  { name: "Super-Homem", realName: "Clark Kent" },
  { name: "Capitão América", realName: "Steve Rogers" },
  { name: "Batman", realName: "Bruce Wayne" },
  { name: "Hulk", realName: "Bruce Banner" },
  { name: "Homem-Aranha", realName: "Peter Parker" },
  { name: "Ciclope", realName: "Scott Summers" }
];

function random(a, b = 1) {
  if (b === 1) {
    [a, b] = [b, a];
  }
  return Math.floor((b - a + 1) * Math.random()) + a;
}

function embaralhar(array) {
  for (let i = array.length; i; i--) {
    let j = random(i) - 1;
    [array[i - 1], array[j]] = [array[j], array[i - 1]];
  }
}

const view = {
  placar: document.querySelector('#placar strong'),
  pergunta: document.querySelector('#pergunta'),
  resultado: document.querySelector('#resultado'),
  info: document.querySelector('#info'),
  iniciar: document.querySelector('#iniciar'),
  resposta: document.querySelector('#resposta'),
  timer: document.querySelector('#timer strong'),
  render(target, content, attributes) {
    for (const key in attributes) {
      target.setAttribute(key, attributes[key]);
    }
    target.innerHTML = content;
  },
  show(element) {
    element.style.display = 'block';
  },
  hide(element) {
    element.style.display = 'none';
  },
  setup() {
    this.show(this.pergunta);
    this.show(this.resposta);
    this.show(this.resultado);
    this.hide(this.iniciar);
    this.render(this.placar, jogo.placar);
    this.render(this.resultado, '');
    this.render(this.info, '');
  },
  teardown() {
    this.hide(this.pergunta);
    this.hide(this.resposta);
    this.show(this.iniciar);
  },
  buttons(array) {
    return array.map(value => `<button>${value}</button>`).join('');
  }
};

const jogo = {
  iniciar(questionario) {
    this.placar = 0;
    this.perguntas = [...questionario];
    view.setup();
    this.segundosRestantes = 20;
    this.timer = setInterval(this.contagemRegressiva, 1000);
    this.perguntar();
  },
  contagemRegressiva() {
    jogo.segundosRestantes--;
    view.render(view.timer, jogo.segundosRestantes);
    if (jogo.segundosRestantes <= 0) {
      jogo.fimDeJogo();
    }
  },
  perguntar(name) {
    if (this.perguntas.length > 2) {
      embaralhar(this.perguntas);
      this.pergunta = this.perguntas.pop();
      const options = [this.perguntas[0].realName, this.perguntas[1].realName, this.pergunta.realName];
      embaralhar(options);
      const pergunta = `Qual é o nome real do ${this.pergunta.name}?`;
      view.render(view.pergunta, pergunta);
      view.render(view.resposta, view.buttons(options));
    }
    else {
      this.fimDeJogo();
    }
  },
  checarResposta(event) {
    const respostaUsuario = event.target.textContent;
    const respostaCorreta = this.pergunta.realName;
    if (respostaUsuario === respostaCorreta) {
      view.render(view.resultado, 'Correto!', { 'class': 'correto' });
      this.placar++;
      view.render(view.placar, this.placar);
    } else {
      view.render(view.resultado, `Errado! A resposta correta era ${respostaCorreta}`, { 'class': 'errado' });
    }
    this.perguntar();
  },
  fimDeJogo() {
    view.render(view.info, `Fim de jogo, você marcou ${this.placar} ponto${this.placar !== 1 ? 's' : ''}`);
    view.teardown();
    clearInterval(this.timer);
  }
}

view.iniciar.addEventListener('click', () => jogo.iniciar(questionario), false);
view.resposta.addEventListener('click', (event) => jogo.checarResposta(event), false);