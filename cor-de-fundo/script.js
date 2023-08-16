function mudarCorFundo() {
  let cores = ['red','orange','yellow','green','blue','rebeccapurple','violet'];

  let indice = Math.floor( 7 * Math.random());

  document.body.style.background = cores[indice];
}

let btn = document.getElementById('btn');
btn.addEventListener('click', mudarCorFundo);